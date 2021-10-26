import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import './ChatList.css';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import {store} from '../../store/create-store';
import {setCurrentChat,deleteChat} from "../../store/chats/actions";
import {useSelector} from "react-redux";


export function ChatList() {

    const chats = useSelector(()=>{
        return store.getState().ChatsReducer.chats;
    });

    return (
        <List>
            {Object.keys(chats).map((item, index) => (
                <ListItem disablePadding key={item}>
                    <ListItemButton onClick={
                        ()=>store.dispatch(setCurrentChat(item))
                    }>
                        <Link className="chat-list-link"
                              to={"/chats/" + item}>
                            <ListItemText primary={chats[item].name}/>
                        </Link>
                    </ListItemButton>
                    <CloseIcon onClick={()=>store.dispatch(deleteChat(item))}/>
                </ListItem>
            ))}
        </List>
    );
}