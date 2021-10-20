import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { ChatList } from "../ChatList/ChatList";
import { Item } from '../Item/Item';
import {AddChatInput} from "../AddChatInput/AddChatInput";

export function LeftPanel({chats, inputAddChat, addChat, setChatAdd, handleClickOnChatAddButton, updateCurrentChat, currentChat, deleteChat}){
    return (
        <Grid item xs={3}>
            <Item style={{height: '10vh'}}>
                <Stack direction="row" style={{alignItems: 'center'}}>
                    <TextField fullWidth id="standard-basic" label="Поиск" variant="standard"/>
                    <SearchIcon/>
                </Stack>
            </Item>
            <Item style={{height: '10vh'}}>
               <AddChatInput inputAddChat={inputAddChat}
                             addChat={addChat}
                             setChatAdd={setChatAdd}
                             handleClickOnChatAddButton={handleClickOnChatAddButton}/>
            </Item>
            <Item style={{height: '58vh', overflowX: 'auto'}}>
                <ChatList chats={chats} updateCurrentChat={updateCurrentChat} currentChat={currentChat}
                          deleteChat={deleteChat}/>
            </Item>
        </Grid>
        )
}