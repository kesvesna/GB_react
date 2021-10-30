import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import * as React from "react";
import './MessageInput.css';
import {handleChangeMessage, handleAddMessageToChat} from "../../../store/chats/actions";
import {useSelector} from "react-redux";
import {store} from "../../../store/create-store";
import {useParams} from "react-router";

export function MessageInput() {

    const message = useSelector(() => {
        return store.getState().ChatsReducer.message;
    });

    const {id} = useParams();

    return (
        <Stack direction="row" className="message-input">
            <TextField onChange={(e) => store.dispatch(handleChangeMessage(e.target.value))}
                       fullWidth id="standard-basic" label="Введите сообщение"
                       variant="standard" value={message} autoFocus={true}/>
            <SendIcon onClick={() => store.dispatch(handleAddMessageToChat(message, id, 'User'))}/>
        </Stack>
    )
}