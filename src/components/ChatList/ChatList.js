import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import './ChatList.css';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import {store} from '../../store/create-store';
import {setCurrentChat, deleteChat} from "../../store/chats/actions";
import {useSelector} from "react-redux";

export function ChatList() {

    const chats = useSelector((state) => [...Object.entries(state.ChatsReducer.chats)]);

    return (
        <List>
            {chats.map((item, index) => (
                <ListItem disablePadding key={item[0]}>
                    <ListItemButton>
                        <Link className="chat-list-link" to={"/chats/" + item[0]}>
                            <ListItemText primary={item[1].name}/>
                        </Link>
                    </ListItemButton>
                    <CloseIcon onClick={() => store.dispatch(deleteChat(item[0]))}/>
                </ListItem>
            ))}
        </List>
    );
}