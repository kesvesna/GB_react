import './MessageList.css';
import Stack from '@mui/material/Stack';
import * as React from "react";
import {Item} from '../../presentations/Item/Item';
import {useSelector} from "react-redux";
import {useParams} from "react-router";

export function MessageList() {

    const {id} = useParams();

    const currentMessages = useSelector((state) =>
        state.ChatsReducer.chats[id]?.messages ?? []);

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