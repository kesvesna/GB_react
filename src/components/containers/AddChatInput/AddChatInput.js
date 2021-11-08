import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import "./AddChatInput.css"
import {store} from '../../../store/create-store';
import {handleAddNewChat} from "../../../store/chats/actions";
import {useDispatch, useSelector} from "react-redux";
import {addNewChat} from '../../../store/chats/thunks';

export function AddChatInput() {

    const newChatName = useSelector((state) => state.ChatsReducer.newChatName);
    const dispatch = useDispatch();

    return (
        <Stack direction="row" className="add-chat">
            <TextField onChange={(e) => store.dispatch(handleAddNewChat(e.target.value))}
                       fullWidth id="standard-basic" label="Добавить чат" variant="standard" value={newChatName}/>
            <AddIcon onClick={() => dispatch(addNewChat(newChatName))}/>
        </Stack>
    )

}