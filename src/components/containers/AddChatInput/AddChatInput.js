import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import "./AddChatInput.css"
import {store} from '../../../store/create-store';
import {addChat} from "../../../store/chats/actions";
import {handleAddNewChat, addNewChatSuccess} from "../../../store/chats/actions";
import {useDispatch, useSelector} from "react-redux";
import {chatsSelector, getChats} from "../../../store/chats";
import {useEffect} from "react";
import {addNewChat} from '../../../store/chats/thunks';

export function AddChatInput() {

    const newChatName = useSelector((state) => state.ChatsReducer.newChatName);

    return (
        <Stack direction="row" className="add-chat">
            <TextField onChange={(e) => store.dispatch(handleAddNewChat(e.target.value))}
                       fullWidth id="standard-basic" label="Добавить чат" variant="standard" value={newChatName}/>
            <AddIcon onClick={() => store.dispatch(addNewChat(newChatName))}/>
        </Stack>
    )

}