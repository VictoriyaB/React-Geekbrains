import './chatList.css'
import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const ChatList = ({ chats }) => {

    const renderChatList = (chats)=> (
        <ListItem key={chats.id}>
            <Link to={`/home/${chats.id}`}>
                <ListItemAvatar>
                    <Avatar alt={chats.name} src={chats.img} />
                </ListItemAvatar>
                <ListItemText primary={chats.name} />
            </Link>
        </ListItem>
    );

    return (
        <div className="chatList">
            <List>
            {Object.values(chats).map(renderChatList)}
            </List>
        </div>
    );
};