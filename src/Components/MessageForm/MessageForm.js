import './messageForm.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    inputRoot: {
        width: '100%',
        background: '#9e9e9e',
        borderRadius: '4px',
        marginRight: '10px', 
        '& label.MuiFormLabel-root': {color: '#fafafa', fontSize: 12},
        '& label.Mui-focused': {color: '#fafafa'},
        '& .MuiFilledInput-underline:after': {borderColor: '#e53935'},
        '& .MuiInputBase-input': {color: '#fafafa'}
    },
    
    buttonRoot: {
        background: '#f44336', 
        '&:hover': {background: '#e53935'},
        lineHeight: 1.5,
        color: '#fafafa',
        fontSize: 10
    }
});

const inputProps = {
    id: 'filled-size-small',
    label: 'Введите сообщение', 
    variant: 'filled',
    size: 'small',
}

export const MessageForm = ({ onSendMessage }) => {
    const [value, setvalue] = useState('');
    const classes = useStyles();
    const inputRef = useRef();

    const handleChange = (event) =>
        setvalue(event.target.value);
    
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSendMessage({
            author: 'Me',
            text: value,
            id: Date.now()
        });
        setvalue('');
    },[onSendMessage,value]
    );

    useEffect(() => {
        inputRef.current?.focus();
    },[handleSubmit]);
    
    return (
        <form className="messageForm" onSubmit={handleSubmit}>
            <TextField className={classes.inputRoot} inputRef={inputRef} value={value} onChange={handleChange} {...inputProps}/>
            <Button variant="contained" type="submit" className={classes.buttonRoot}>Отправить</Button>
        </form>
    );
}


