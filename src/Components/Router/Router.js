import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Profile } from '../Pfofile/Profile';
import { Home } from '../Home/Home';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './App.css';

export const Router = () => {
    return (
        <BrowserRouter>
        <div className="App">
            <ul className="App-list" >
                <li>
                    <Link to="/home" className="App-link"><HomeIcon />Home</Link>
                </li>
                <li>
                    <Link to="/profile" className="App-link"><AccountBoxIcon />Profile</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/profile"><Profile /></Route>
                <Route path="/home/:chatId?" ><Home /></Route>
                <Route path="*"><h2 className="page404">Страница не существует</h2></Route>
            </Switch>
            </div> 
        </BrowserRouter>
    );
}