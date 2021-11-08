import {Chip} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {MessageList} from "../MessageList/MessageList";
import {Item} from '../../presentations/Item/Item';
import {MessageInput} from "../MessageInput/MessageInput";
import './RightPanel.css';
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {chatNameSelector} from "../../../store/chats";

export function RightPanel() {

    const {id} = useParams();
    const chatName = useSelector(chatNameSelector(id));

    return (
        <Grid item xs={9}>
            <Item className="right-panel-current-chat-item">
                <Chip icon={<InboxIcon/>} label={chatName ?? 'Choose chat'} variant="outlined"/>
            </Item>
            <Item className="right-panel-message-list-item">
                <MessageList/>
            </Item>
            <Item className="message-input-item">
                <MessageInput/>
            </Item>
        </Grid>
    )
}