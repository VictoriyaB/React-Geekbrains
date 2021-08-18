import './App.css';
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Profile } from '../Profile/Profile';
import { Chats } from '../Chats/Chats';
import { Home } from '../Home/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <ul className="App-list" >
                    <li>
                        <Link to="/home" className="App-link"><HomeIcon />Home</Link>
                    </li>
                    <li>
                        <Link to="/chats" className="App-link"><GroupIcon />Chats</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="App-link"><AccountBoxIcon />Profile</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/" exact><h2>WELCOME</h2></Route>
                    <Route path="/home"><Home /></Route>
                    <Route path="/profile"><Profile /></Route>
                    <Route path="/chats/:chatId?" ><Chats /></Route>
                    <Route path="*"><h2 className="page404">Страница не существует</h2></Route>
                </Switch>
            </div> 
        </BrowserRouter>
    );
}