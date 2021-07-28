import './messageForm.css';
import React, { useState } from 'react';

export const MessageForm = ({ onSendMessage }) => {
    const [value, setvalue] = useState('');

    const handleChange = (event) =>
        setvalue(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage({
            author: 'Me',
            text: value,
            id: Date.now()
        });
        setvalue('');
    }

    return (
        <form className="messageForm" onSubmit={handleSubmit}>
            <input className="messageInput" type="text" placeholder="Введите сообщение" value={value} onChange={handleChange}/>
            <button className="button" type="submit">Отправить</button>
        </form>
    )

}


