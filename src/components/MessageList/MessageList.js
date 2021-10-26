import './MessageList.css';
import Stack from '@mui/material/Stack';
import * as React from "react";
import {Item} from '../Item/Item';
import {store} from '../../store/create-store';
import {useSelector} from "react-redux";

export function MessageList() {

    const currentMessages = useSelector(()=>{
        return store.getState().ChatsReducer.chats[store.getState().ChatsReducer.currentChat]?.messages ?? [];
    });

    return (
        <>
            {currentMessages.map((item) => (
                (item.author !== "Bot" &&
                    <Stack key={item.id} className="user-message-stack" display="row">
                        <Item key={item.id} className="message-item">
                            {item.message}
                        </Item>
                    </Stack>)
                ||
                (item.author === "Bot" &&
                    <Stack key={item.id} className="bot-message-stack" display="row">
                        <Item key={item.id} className="message-item">
                            {item.author + ": "}{item.message}
                        </Item>
                    </Stack>)
            ))
            }
        </>
    );
}