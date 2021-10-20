import './MessageList.css';
import Stack from '@mui/material/Stack';
import * as React from "react";
import { Item } from '../Item/Item';

export function MessageList({currentMessages}) {
    return (
        <>
            {currentMessages.map((item) => (
                (item.author !== "Bot" &&
                    <Stack key={item.id} className="user-message-stack" display="row">
                        <Item key={item.id} className="message-item">
                            {item.message}
                        </Item>
                    </Stack>)
                ||
                (item.author === "Bot" &&
                    <Stack key={item.id} className="bot-message-stack" display="row">
                        <Item key={item.id} className="message-item">
                            {item.author + ": "}{item.message}
                        </Item>
                    </Stack>)
            ))
            }
        </>
    );
}