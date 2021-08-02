import './messageForm.css';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    inputRoot: {
        width: '500px',
        background: '#9e9e9e',
        borderRadius: '4px',
        marginRight: '10px', 
        '& label.MuiFormLabel-root': {color: '#fafafa', fontSize: 12},
        '& label.Mui-focused': {color: '#fafafa'},
        '& .MuiFilledInput-underline:after': {borderColor: '#e53935'}
    },
    
    buttonRoot: {
        background: '#f44336', 
        '&:hover': {background: '#e53935'},
        lineHeight: 1.5,
        color: '#fafafa',
        fontSize: 10
    }
});

export const MessageForm = ({ onSendMessage }) => {
    const [value, setvalue] = useState('');
    const classes = useStyles();
    const inputRef = useRef();

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
        inputRef.current?.focus();
    }


    useEffect(() => {
        inputRef.current?.focus();
    },[]);
    
    return (
        
        <form className="messageForm" onSubmit={handleSubmit}>
            <TextField id="filled-size-small" label="Введите сообщение" 
            variant="filled" 
            size="small"
            className={classes.inputRoot}
            inputRef={inputRef}
            value={value} onChange={handleChange}/>
            <Button variant="contained" type="submit" 
            className={classes.buttonRoot}
            >Отправить</Button>
        </form>
    );

}


