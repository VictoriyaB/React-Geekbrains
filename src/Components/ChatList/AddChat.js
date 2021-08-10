import './addChat.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../store/chats/actions';

export const AddChat = () => {
    const dispatch = useDispatch();

    const [value, setvalue] = useState('');

    const handleChange = (e) => { 
        setvalue(e.target.value);
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
        return;
    }
    const newId = `chat${Date.now()}`

    dispatch(addChat(newId, value));

    setvalue('');
}

    return (
        <form className="addChatForm" onSubmit={handleSubmit}>
            <input className="addChatInput" placeholder="Add a chat name" onChange={handleChange} value={value} />
        </form>
    )
}