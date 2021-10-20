import {Chip} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { MessageList } from "../MessageList/MessageList";
import { Item } from '../Item/Item';
import { MessageInput } from "../MessageInput/MessageInput";
import './RightPanel.css';

export function RightPanel({currentChat, currentMessages, inputRef, message, setMessage, handleOnClickSendButton, chats}){
    return(
        <Grid item xs={9}>
            <Item className="right-panel-current-chat-item">
                <Chip icon={<InboxIcon/>} label={chats[currentChat]?.name ?? 'Choose chat'} variant="outlined"/>
            </Item>
            <Item className="right-panel-message-list-item">
                <MessageList currentMessages={currentMessages}/>
            </Item>
            <Item className="message-input-item">
              <MessageInput inputRef={inputRef}
                            setMessage={setMessage}
                            handleOnClickSendButton={handleOnClickSendButton}
                            message={message}/>
            </Item>
        </Grid>
    )
}