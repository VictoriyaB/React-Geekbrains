import './chats.css';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageList } from '../MessageList/MessageList';
import { MessageForm } from '../MessageForm/MessageForm';
import { ChatList } from '../ChatList/ChatList';
import { sendMessage, sendMessageFromRobot } from '../store/chats/actions';
import { selectChats } from '../store/chats/selectors';

export const Chats = () => {
    const { chatId } = useParams();

    const chats = useSelector(selectChats);

    const dispatch = useDispatch();
    
    const handleSendMessage = useCallback((newMessage) => {
            if(chatId !== 'robotChat') {
                dispatch(sendMessage(chatId, newMessage));
            } else {
            dispatch(sendMessageFromRobot(chatId, newMessage));
            };
        },
        [chatId, dispatch]
    );

    if (chatId && !chats[chatId]) {
        return <Redirect to="/chats" />;
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


