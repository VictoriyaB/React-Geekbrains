import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_SHOW_NAME } from '../store/actionTypes';
import Button from '@material-ui/core/Button';
import './profile.css'

export const Profile = () => {
    const { showName, name } = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleShow = () => {
        dispatch({
            type: PROFILE_SHOW_NAME
        });
    }

    return (
        <div className="profileWrapper">
        <h4 className="profileName">Profile {showName && <span>{name}</span>}</h4>
        <Button variant="contained" className="profileButton" onClick={toggleShow}>Show name profile</Button>
        </div>
    )
}