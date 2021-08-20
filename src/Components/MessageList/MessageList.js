import './messageList.css';
import React, { useCallback, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { uid } from 'uid';
import { Message } from '../Message/Message';
import { selectProfileName } from '../store/chats/selectors';
import { AUTHORS } from '../../constants';

export const MessageList = ({ messageList }) => {
    const profileName = useSelector(selectProfileName);
    
    const renderMessageList = useCallback((mess) =>(
        <Message text={mess.text} author={mess.author === AUTHORS.me ? profileName : mess.author} key={uid()} />
    ), [profileName]);

    const messagesEndRef = useRef(null);
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messageList]);

    return (
        <div className="messageChat">
            {messageList.map(renderMessageList)}
            <div ref={messagesEndRef} />
        </div>
    );
}