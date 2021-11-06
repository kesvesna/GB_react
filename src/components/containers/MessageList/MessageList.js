import './MessageList.css';
import Stack from '@mui/material/Stack';
import * as React from "react";
import {Item} from '../../presentations/Item/Item';
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {store} from "../../../store/create-store";
import {handleDeleteMessage} from "../../../store/chats/actions";
import CloseIcon from "@mui/icons-material/Close";
import {chatMessagesSelector, deleteMessageFromChat} from "../../../store/chats";

export function MessageList() {

    const {id} = useParams();

    const currentMessages = useSelector(chatMessagesSelector(id));

    return (
        <>
            {currentMessages !== null && currentMessages && currentMessages.map((item) => (
                (item[1].author !== "Bot" &&
                    <Stack key={item[0]} className="user-message-stack" display="row">
                        <Item key={item[0]} className="message-item">
                            <Item>
                                {item[1].author + ": "}{item[1].message}
                                <CloseIcon style={{float: 'right'}}
                                           onClick={() => store.dispatch(deleteMessageFromChat(id, item[0]))}/>
                            </Item>
                            <Item style={{textAlign: 'right'}}>
                                {item[1].date}
                            </Item>
                        </Item>
                    </Stack>)
                ||
                (item[1].author === "Bot" &&
                    <Stack key={item[0]} className="bot-message-stack" display="row">
                        <Item key={item[0]} className="message-item">
                            <Item>
                                {item[1].author + ": "}{item[1].message}
                                <CloseIcon style={{float: 'right'}}
                                           onClick={() => store.dispatch(deleteMessageFromChat(id, item[0]))}/>
                            </Item>
                            <Item style={{textAlign: 'right'}}>
                                {item[1].date}
                            </Item>
                        </Item>
                    </Stack>)
            ))
            }
        </>
    );
}