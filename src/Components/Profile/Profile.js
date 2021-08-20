import './profile.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../utils/useInput';
import { changeName } from '../store/profile/actions';
import { selectName } from '../store/profile/selectors';
import { Form } from '../Form/Form';
import { useStyles, inputProps, buttonProps} from './Styles'

export const Profile = () => {
    const { value, handleChange, reset} = useInput('');

    const name = useSelector(selectName);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        dispatch(changeName(value));
        reset();
    }

    return (
        <div className="profileWrapper">
            <h4 className="profileName">Profile {name}</h4>
            <Form
                value={value}
                useStyles={useStyles}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                inputProps={inputProps}
                buttonProps={buttonProps}
            />
        </div>
        
    )
}