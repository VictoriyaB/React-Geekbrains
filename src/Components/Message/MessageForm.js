import './messageForm.css';
import React, { useState } from "react";

export const MessageForm = ({ onSendMessage }) => {
    const [value, setvalue] = useState('');

    const handleChange = (event) =>
        setvalue(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefolt();
        onSendMessage({
            author: 'Me',
            text: value,
            id: Date.now()
        });
        setvalue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
            <input type="submit"/>
        </form>
    )

}


