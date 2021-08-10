import './home.css';
import React from 'react';
import { useCallback, useEffect } from 'react';
import { MessageList } from '../MessageList/MessageList';
import { MessageForm } from '../MessageForm/MessageForm';
import { ChatList } from '../ChatList/ChatList';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../store/chats/actions';
import { selectChats } from '../store/chats/selectors';
import { AUTHORS } from '../../constants';

export const Home = () => {
    const { chatId } = useParams();

    const chats = useSelector(selectChats);

    const dispatch = useDispatch();
    
    const handleSendMessage = useCallback((newMessage) => {
        dispatch(sendMessage(chatId, newMessage));
        },
        [chatId, dispatch]
    );

    useEffect(() => {
        if (
            !chatId ||
            !chats[chatId] ||
            chats[chatId].name !== "Robot" ||
            !chats[chatId]?.messages.length ||
            chats[chatId].messages[chats[chatId].messages.length - 1].author === "Robot"
            ) {return}
                
        const robotText = 'Все говорят ' + chats[chatId].messages[chats[chatId].messages.length - 1].text +  ', а ты купи слона!'

        const robotmess = {
            author: AUTHORS.robot,
            text: robotText,
            id: Date.now()
        }
        setTimeout(() => {
            handleSendMessage(robotmess);
        }, 1000); 
    
        return () => clearTimeout();
        
    }, [chats, chatId, handleSendMessage]);

    if (chatId && !chats[chatId]) {
        return <Redirect to="/home" />;
    }

    return (
        <>
        <h1 className="header">Select a chat</h1>
        <div className="chat-wrapper">
            <ChatList chats={chats} chatId={chatId}/>
            <div className="messageList-wrapper">
                {!!chatId && <div>
                    <MessageList messageList={chats[chatId].messages} />
                    <MessageForm  onSendMessage={handleSendMessage}/>
                </div>}
            </div>
        </div>
        </>
    );
}


