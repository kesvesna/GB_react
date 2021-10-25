import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import './ChatList.css';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export function ChatList({chats, updateCurrentChat, deleteChat}) {

    return (
        <List>
            {Object.keys(chats).map((item, index) => (
                <ListItem disablePadding key={item}>
                    <ListItemButton onClick={() => {
                        updateCurrentChat(item)
                    }}>
                        <Link className="chat-list-link"
                              to={"/chats/" + item}>
                            <ListItemText primary={chats[item].name}/>
                        </Link>
                    </ListItemButton>
                    <CloseIcon onClick={() => {
                        deleteChat(item)
                    }}/>
                </ListItem>
            ))}
        </List>
    );
}