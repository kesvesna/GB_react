import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import "./AddChatInput.css"

export function AddChatInput({inputAddChat, addChat, setChatAdd, handleClickOnChatAddButton}){
    return (
        <Stack direction="row" className="add-chat">
            <TextField inputRef={inputAddChat} value={addChat}
                       onChange={(e) => setChatAdd(e.target.value)}
                       fullWidth id="standard-basic" label="Добавить чат" variant="standard"/>
            <AddIcon onClick={handleClickOnChatAddButton}/>
        </Stack>
    )

}