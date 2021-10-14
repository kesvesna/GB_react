import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export function ChatList() {

    const [chatList, setChatList] = useState([
        {id: 1, chatName: 'Чат 1'}, {id: 2, chatName: 'Чат 2'}, {id: 3, chatName: 'Чат 3'}, {id: 4, chatName: 'Чат 4'},
        {id: 5, chatName: 'Чат 5'}, {id: 6, chatName: 'Чат 6'}, {id: 7, chatName: 'Чат 7'}, {id: 8, chatName: 'Чат 8'},
        {id: 9, chatName: 'Чат 9'}, {id: 10, chatName: 'Чат 10'}, {id: 11, chatName: 'Чат 11'},
        {id: 12, chatName: 'Чат 12'}, {id: 13, chatName: 'Чат 13'},
        {id: 14, chatName: 'Чат 14'}
    ]);

    return (
        <List>
            {chatList.map((item) => (
                <ListItem disablePadding  key={item.id} >
                    <ListItemButton>
                        <ListItemText primary={item.chatName}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}