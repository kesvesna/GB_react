import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import './ChatList.css';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import {deleteChat} from "../../../store/chats/thunks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getChats, chatsSelector} from "../../../store/chats";

export function ChatList() {

    const dispatch = useDispatch();
    const {chats, chatsError, chatsPending} = useSelector(chatsSelector);

    useEffect(() => {
        dispatch(getChats());
    }, [dispatch])

    return (
        <List>
            {chats != undefined && chats != null && Object.keys(chats).length != 0 && chats.map((item) => (
                <ListItem disablePadding key={item[0]}>
                    <ListItemButton>
                        <Link className="chat-list-link" to={"/chats/" + item[0]}>
                            <ListItemText primary={item[1].name}/>
                        </Link>
                    </ListItemButton>
                    <CloseIcon onClick={() => dispatch(deleteChat(item[0]))}/>
                </ListItem>
            ))}
        </List>
    );
}