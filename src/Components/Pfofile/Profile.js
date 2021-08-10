import './profile.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/profile/actions';
import { selectName } from '../store/profile/selectors';

export const Profile = () => {
    const [value, setvalue] = useState('');

    const name = useSelector(selectName);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        dispatch(changeName(value));
        setvalue('');
    }

    const handleChange = (e) => {
        setvalue(e.target.value);
    }

    return (
        <div className="profileWrapper">
        <h4 className="profileName">Profile {name}</h4>
        <form className="profileForm" onSubmit={handleSubmit}>   
            <input className="profileInput" placeholder="Add a name to save" value={value} onChange={handleChange} />
            <button variant="contained" className="profileButton" onClick={handleSubmit}>Save</button>
        </form>
        </div>
    )
}