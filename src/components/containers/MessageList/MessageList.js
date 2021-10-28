import './MessageList.css';
import Stack from '@mui/material/Stack';
import * as React from "react";
import {Item} from '../../presentations/Item/Item';
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {store} from "../../../store/create-store";
import {handleDeleteMessage} from "../../../store/chats/actions";
import CloseIcon from "@mui/icons-material/Close";

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
                            <Item>
                                {item.author + ": "}{item.message}
                                <CloseIcon style={{ float: 'right'}}  onClick={() => store.dispatch(handleDeleteMessage(id, item.id))}/>
                            </Item>
                            <Item style={{ textAlign: 'right'}}>
                                {item.date}
                            </Item>
                        </Item>
                    </Stack>)
                ||
                (item.author === "Bot" &&
                    <Stack key={item.id} className="bot-message-stack" display="row">
                        <Item key={item.id} className="message-item">
                            <Item>
                                {item.author + ": "}{item.message}{" : " + item.date}
                                <CloseIcon style={{ float: 'right'}}  onClick={() => store.dispatch(handleDeleteMessage(id, item.id))}/>
                            </Item>
                            <Item style={{ textAlign: 'right'}}>
                                {item.date}
                            </Item>
                       </Item>
                    </Stack>)
            ))
            }
        </>
    );
}