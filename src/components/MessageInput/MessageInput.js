import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import * as React from "react";
import './MessageInput.css';
import {handleChangeMessage, handleAddMessageToChat} from "../../store/chats/actions";
import {useSelector} from "react-redux";
import {store} from "../../store/create-store";

export function MessageInput({inputRef}) {

    const message = useSelector(()=>{
        return store.getState().ChatsReducer.message;
    });

    const currentChat = useSelector(()=>{
        return store.getState().ChatsReducer.currentChat;
    })


    return (
        <Stack direction="row" className="message-input">
            <TextField inputRef={inputRef} value={message}
                       onChange={(e) => store.dispatch(handleChangeMessage(e.target.value))}
                       fullWidth id="standard-basic" label="Введите сообщение"
                       variant="standard"/>
            <SendIcon onClick={()=>store.dispatch(handleAddMessageToChat(message, currentChat))}/>
        </Stack>
    )
}