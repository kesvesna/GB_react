import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {store} from "./store/create-store";
import {LeftPanel} from "./components/LeftPanel/LeftPanel";
import {RightPanel} from "./components/RightPanel/RightPanel"
import {handleAddMessageToChat} from './store/chats/actions';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export function App(props) {

    const currentChat = useSelector(()=>{
        return store.getState().ChatsReducer.currentChat;
    });

    const inputRef = useRef(null);

    const inputAddChat = useRef(null);

    const message = useSelector(()=>{
        return store.getState().ChatsReducer.message;
    });

    const [addChat, setChatAdd] = useState('');

    const chats = useSelector(()=>{
        return store.getState().ChatsReducer.chats;
    });

    const [currentMessages, setCurrentMessages] = useState([]);

    useEffect(() => {
        let temp = [];
        try {
            temp = chats[currentChat].messages;
        } catch (e) {
        }
        return setCurrentMessages(temp);
    }, [currentChat]);

    const addMessageToChat= () => dispatch(handleAddMessageToChat(message, currentChat));


    const handleOnClickSendButton = () => {
        if (message) {
            let lastMessageId = chats[currentChat].messages.length;
            // setChats({
            //     ...chats,
            //     [currentChat]: {
            //         ...chats[currentChat],
            //         messages: [
            //             ...chats[currentChat].messages, {
            //                 id: lastMessageId++,
            //                 message: message,
            //                 author: 'User',
            //                 date: new Date()
            //             }
            //         ]
            //     }
            // });
            setCurrentMessages([...currentMessages, {
                id: lastMessageId++,
                message: message,
                author: 'User',
                date: new Date()
            }]);
            //setMessage('');
        }
        inputRef.current?.focus();
    }

    const handleClickOnChatAddButton = () => {
        if (addChat) {
            let lastChatId = Object.keys(chats)[Object.keys(chats).length - 1];
            if (lastChatId !== undefined) {
                lastChatId = 'id' + (parseInt(lastChatId.substr(2)) + 1);
            } else {
                lastChatId = 'id1';
            }
            // setChats({
            //     ...chats, [lastChatId]:
            //         {
            //             name: addChat, messages: []
            //         }
            // });
            setChatAdd('');
        }
    }

    useEffect(() => {
        let timer = null;
        const lastMessage = currentMessages[currentMessages.length - 1];
        if (currentMessages.length >= 1 && lastMessage.author !== "Bot") {
            timer = setTimeout(() => {
                let lastMessageId = currentMessages.length;
                // setChats({
                //     ...chats,
                //     [currentChat]: {
                //         ...chats[currentChat],
                //         messages: [
                //             ...chats[currentChat].messages, {
                //                 id: lastMessageId++,
                //                 author: "Bot",
                //                 message: "Bot message",
                //                 date: new Date()
                //             }
                //         ]
                //     }
                // });
                setCurrentMessages(currentMessages => ([...currentMessages, {
                    id: lastMessageId++,
                    author: "Bot",
                    message: "Bot message",
                    date: new Date()
                }]));
            }, 1500);
        }
        inputRef.current?.focus();
        return () => clearTimeout(timer)
    }, [currentMessages]);

    const dispatch = useDispatch();

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={1}>
                        <LeftPanel chats={chats}
                                   inputAddChat={inputAddChat}
                                   addChat={addChat}
                                   setChatAdd={setChatAdd}
                                   handleClickOnChatAddButton={handleClickOnChatAddButton}/>
                        <RightPanel currentChat={currentChat}
                                    currentMessages={currentMessages}
                                    inputRef={inputRef}
                                    handleOnClickSendButton={addMessageToChat}
                                    chats={chats}/>
                    </Grid>
                </Box>
            </div>
        </ThemeProvider>
    );
}

