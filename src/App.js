import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InboxIcon from '@mui/icons-material/Inbox';
import {Chip} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {ChatList} from './components/ChatList/ChatList'
import {MessageList} from "./components/MessageList/MessageList";


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

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function App() {

    const inputRef = useRef(null);

    const inputAddChat = useRef(null);

    const [message, setMessage] = useState('');

    const [addChat, setChatAdd] = useState('');

    const [chats, setChats] = useState({
        id1: {
            name: 'Chat 1', messages: [
                {id: 1, author: 'User', message: 'Message 1', date: new Date()},
                {id: 2, author: 'Bot', message: 'Message 1', date: new Date()},
                {id: 3, author: 'User', message: 'Message 2', date: new Date()},
                {id: 4, author: 'Bot', message: 'Message 2', date: new Date()}
            ]
        },
        id2: {
            name: 'Chat 2', messages: [
                {id: 1, author: 'User', message: 'Message 3', date: new Date()},
                {id: 2, author: 'Bot', message: 'Message 3', date: new Date()},
                {id: 3, author: 'User', message: 'Message 4', date: new Date()},
                {id: 4, author: 'Bot', message: 'Message 4', date: new Date()}
            ]
        },
        id3: {
            name: 'Chat 3', messages: [
                {id: 1, author: 'User', message: 'Message 5', date: new Date()},
                {id: 2, author: 'Bot', message: 'Message 5', date: new Date()},
                {id: 3, author: 'User', message: 'Message 6', date: new Date()},
                {id: 4, author: 'Bot', message: 'Message 6', date: new Date()}
            ]
        },
    });

    const [currentChat, setCurrentChat] = useState('Choose chat');

    const updateCurrentChat = (chatId) => {
        setCurrentChat(chatId);
    }

    const deleteChat = (chatId) => {
        let newChats = { ...chats };
        delete newChats[chatId];
        setChats(newChats);
        setCurrentMessages([]);
        setCurrentChat('Choose chat');
    }

    const [currentMessages, setCurrentMessages] = useState([]);

    useEffect(() => {
        let temp = [];
        try {
            temp = chats[currentChat].messages;
        } catch (e) {
        }
        return setCurrentMessages(temp);
    }, [currentChat]);

    const handleOnClickSendButton = () => {
        if (message) {
            let lastMessageId = chats[currentChat].messages.length;
            setChats({
                ...chats,
                [currentChat]: {
                    ...chats[currentChat],
                    messages: [
                        ...chats[currentChat].messages, {
                            id: lastMessageId++,
                            message: message,
                            author: 'User',
                            date: new Date()
                        }
                    ]
                }
            });
            setCurrentMessages([...currentMessages, {
                id: lastMessageId++,
                message: message,
                author: 'User',
                date: new Date()
            }]);
            setMessage('');
        }
        inputRef.current?.focus();
    }

    const handleClickOnChatAddButton = () => {
        if (addChat) {
            let lastChatId = Object.keys(chats)[Object.keys(chats).length - 1];
            console.log(lastChatId);
            if(lastChatId !== undefined){
                lastChatId = 'id' + (parseInt(lastChatId.substr(2)) + 1);
            } else {
                lastChatId = 'id1';
            }
            setChats({
                ...chats, [lastChatId]:
                    {
                        name: addChat, messages: []
                    }
            });
            setChatAdd('');
        }
    }

    useEffect(() => {
        let timer = null;
        const lastMessage = currentMessages[currentMessages.length - 1];
        if (currentMessages.length >= 1 && lastMessage.author !== "Bot") {
            timer = setTimeout(() => {
                let lastMessageId = currentMessages.length;
                setChats({
                    ...chats,
                    [currentChat]: {
                        ...chats[currentChat],
                        messages: [
                            ...chats[currentChat].messages, {
                                id: lastMessageId++,
                                author: "Bot",
                                message: "Bot message",
                                date: new Date()
                            }
                        ]
                    }
                });
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


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Item style={{height: '10vh'}}>
                                <Stack direction="row" style={{alignItems: 'center'}}>
                                    <TextField fullWidth id="standard-basic" label="Поиск" variant="standard"/>
                                    <SearchIcon/>
                                </Stack>
                            </Item>
                            <Item style={{height: '10vh'}}>
                                <Stack direction="row" style={{alignItems: 'center'}}>
                                    <TextField inputRef={inputAddChat} value={addChat}
                                               onChange={(e) => setChatAdd(e.target.value)}
                                               fullWidth id="standard-basic" label="Добавить чат" variant="standard"/>
                                    <AddIcon onClick={handleClickOnChatAddButton}/>
                                </Stack>
                            </Item>
                            <Item style={{height: '58vh', overflowX: 'auto'}}>
                                <ChatList chats={chats} updateCurrentChat={updateCurrentChat} currentChat={currentChat}
                                          deleteChat={deleteChat}/>
                            </Item>
                        </Grid>
                        <Grid item xs={9}>
                            <Item style={{alignItems: 'center', height: '10vh'}}>
                                <Chip icon={<InboxIcon/>} label={currentChat} variant="outlined"/>
                            </Item>
                            <Item style={{height: '58vh', overflowX: 'auto'}}>
                                {currentMessages.map((item) => (
                                    (item.author !== "Bot" &&
                                        <Stack key={item.id} display="row" style={{alignItems: 'flex-end'}}
                                               marginBottom="10px">
                                            <Item key={item.id} style={{width: '50%'}}>
                                                {item.message}
                                            </Item>
                                        </Stack>)
                                    ||
                                    (item.author === "Bot" &&
                                        <Stack key={item.id} display="row" style={{alignItems: 'flex-start'}}
                                               marginBottom="10px">
                                            <Item key={item.id} style={{width: '50%'}}>
                                                {item.author + ": "}{item.message}
                                            </Item>
                                        </Stack>)
                                ))
                                }
                            </Item>
                            <Item style={{height: '10vh'}}>
                                <Stack direction="row" style={{alignItems: 'center'}}>
                                    <TextField inputRef={inputRef} value={message}
                                               onChange={(e) => setMessage(e.target.value)}
                                               fullWidth id="standard-basic" label="Введите сообщение"
                                               variant="standard"/>
                                    <SendIcon onClick={handleOnClickSendButton}/>
                                </Stack>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </ThemeProvider>
    );
}

