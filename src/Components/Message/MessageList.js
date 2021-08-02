import './messageList.css';
import React, { useCallback, useRef, useEffect } from "react";
import { Message } from "./Message";

export const MessageList = ({ messageList }) => {
    const renderMessageList = useCallback((mess) =>(
        <Message text={mess.text} author={mess.author} key={mess.id}/>
    ), []);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(() => {
        scrollToBottom()
    }, [messageList]);

    return (
        <div className="messageChat">
            {messageList.map(renderMessageList)}
            <div ref={messagesEndRef} />
        </div>
    );
};