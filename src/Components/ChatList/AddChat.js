import React from 'react';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';
import { useInput } from '../utils/useInput';
import { addChat } from '../store/chats/actions';
import { Form } from '../Form/Form';
import { useStyles, inputProps, buttonProps} from './AddChatStyles'

export const AddChat = () => {
    const dispatch = useDispatch();

    const { value, handleChange, reset} = useInput('');
    
    const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
        return;
    }
    const newId = `chat${uid()}`

    dispatch(addChat(newId, value));

    reset();
}

    return (
        <Form
            value={value}
            useStyles={useStyles}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            inputProps={inputProps}
            buttonProps={buttonProps}
        />
    )
}