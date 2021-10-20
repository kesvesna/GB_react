import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import * as React from "react";
import './MessageInput.css';

export function MessageInput ({inputRef, setMessage, handleOnClickSendButton, message}){
    return (
        <Stack direction="row" className="message-input">
            <TextField inputRef={inputRef} value={message}
                       onChange={(e) => setMessage(e.target.value)}
                       fullWidth id="standard-basic" label="Введите сообщение"
                       variant="standard"/>
            <SendIcon onClick={handleOnClickSendButton}/>
        </Stack>
    )
}