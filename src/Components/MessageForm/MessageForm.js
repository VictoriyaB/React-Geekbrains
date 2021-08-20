import React, { useCallback, useEffect, useRef } from 'react';
import { uid } from 'uid';
import { AUTHORS } from '../../constants';
import { Form } from '../Form/Form';
import { useInput } from '../utils/useInput';
import { useStyles, inputProps, buttonProps } from './Styles'

export const MessageForm = ({ onSendMessage }) => {
    const inputRef = useRef();

    const { value, handleChange, reset} = useInput('');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (!value) return inputRef.current?.focus();        
        onSendMessage({
            author: AUTHORS.me,
            text: value,
            id: uid(),
        });
        reset();
    },[onSendMessage,value, reset]
    );

    useEffect(() => {
        inputRef.current?.focus();
    },[handleSubmit]);
    
    return (
        <Form
            value={value}
            useStyles={useStyles}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            inputProps={inputProps}
            buttonProps={buttonProps}
        />
    );
}