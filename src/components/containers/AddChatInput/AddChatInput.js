import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import "./AddChatInput.css"
import {store} from '../../../store/create-store';
import {addChat} from "../../../store/chats/actions";
import {handleAddNewChat} from "../../../store/chats/actions";
import {useSelector} from "react-redux";

export function AddChatInput() {

    const newChatName = useSelector((state) => state.ChatsReducer.newChatName);


    return (
        <Stack direction="row" className="add-chat">
            <TextField onChange={(e) => store.dispatch(handleAddNewChat(e.target.value))}
                       fullWidth id="standard-basic" label="Добавить чат" variant="standard"/>
            <AddIcon onClick={() => store.dispatch(addChat(newChatName))}/>
        </Stack>
    )

}