import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { MessageList } from '../MessageList/MessageList';
import { MessageForm } from '../MessageForm/MessageForm';
import { ChatList } from '../ChatList/ChatList';
import { Redirect, useParams } from 'react-router-dom';
import './home.css';

const initialChats = {
    chat1: {
        name: 'Robot',
        id: 'chat1',
        messages: [{author:'Robot', text:'Привет! Купи слона!', id: Date.now()}],
        img: '/static/images/avatar/123.jpg', 
        },
    chat2: {
        name: 'User2',
        id: 'chat2',
        messages: [{author:'User2', text:'Привет!', id: Date.now()}],
        img: null,
        },    
    chat3: {
        name: 'User3',
        id: 'chat3',
        messages: [],
        img: null,
    },
};

export const Home = () => {
    const { chatId } = useParams();
    
    const [chats, setChats] = useState(initialChats);

    const handleSendMessage = useCallback((newMessage) => {
        setChats({
            ...chats,
            [chatId]: {
            ...chats[chatId],
            messages: [...chats[chatId].messages, newMessage],
            },
        });
        },
        [chats, chatId]
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
            author: 'Robot',
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
            <ChatList chats={chats} />
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


