import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import './MessageList.css';
import Stack from "@mui/material/Stack";

export function MessageList() {



    return (
        <>
        <Item style={{height: '70vh', overflowX: 'auto'}}>
            {messageList.map((item) => (
                (item.author !== "Bot" &&
                    <Stack key={item.messageId} display="row"  style={{ alignItems: 'flex-end'}} marginBottom="10px">
                        <Item key={item.messageId} style={{width: '50%'}}>
                            {item.message}
                        </Item>
                    </Stack>)
                ||
                (item.author === "Bot" &&
                    <Stack  key={item.messageId} display="row"  style={{ alignItems: 'flex-start'}} marginBottom="10px">
                        <Item  key={item.messageId} style={{width: '50%'}}>
                            {item.author + ": "}{item.message}
                        </Item>
                    </Stack>)
            ))}
        </Item>
            </>
    );
}