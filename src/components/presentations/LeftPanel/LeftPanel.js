import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import {ChatList} from "../../containers/ChatList/ChatList";
import {Item} from '../Item/Item';
import {AddChatInput} from "../../containers/AddChatInput/AddChatInput";

export function LeftPanel() {

    return (
        <Grid item xs={3}>
            <Item style={{height: '10vh'}}>
                <Stack direction="row" style={{alignItems: 'center'}}>
                    <TextField fullWidth id="standard-basic" label="Поиск" variant="standard"/>
                    <SearchIcon/>
                </Stack>
            </Item>
            <Item style={{height: '10vh'}}>
                <AddChatInput/>
            </Item>
            <Item style={{height: '58vh', overflowX: 'auto'}}>
                <ChatList/>
            </Item>
        </Grid>
    )
}