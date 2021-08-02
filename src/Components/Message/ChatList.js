import './chatList.css'
import React, { useCallback, useState } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


export const ChatList = () => {

    const chatUsers = [
        {author: 'Robot', id: 123, img: '/static/images/avatar/123.jpg'},
        {author: 'User1', id: 124, img: null},
        {author: 'User2', id: 125, img: null},
        {author: 'User3', id: 126, img: null}
    ];

    const [chats, setChats] = useState(chatUsers);

    const renderChatList = useCallback((chats) => (
        <ListItem key={chats.id}>
            <ListItemAvatar>
                <Avatar alt={chats.author} src={chats.img} />
                </ListItemAvatar>
                <ListItemText primary={chats.author} />
        </ListItem>
    ),[]);

    return (
        <div className="chatList">
            <List>
            {chats.map(renderChatList)}
            </List>
        </div>
    );
};