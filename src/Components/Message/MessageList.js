import './messageList.css';
import React, { useCallback } from "react";
import { Message } from "./Message";

export const MessageList = ({ messageList }) => {
    const renderMessageList = useCallback((mess) =>(
        <Message text={mess.text} author={mess.author} key={mess.id}/>
    ), []);

    return (
        <div className="messageChat">
            {messageList.map(renderMessageList)}
        </div>
    );
};