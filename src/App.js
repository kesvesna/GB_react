import {useState, useEffect, useRef} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InboxIcon from '@mui/icons-material/Inbox';
import { Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ChatList } from './components/ChatList/ChatList.js'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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

    const [messageList, setMessageList] = useState([]);

    const [message, setMessage] = useState('');

    const [chatList, setChatList] = useState([
        {id: 1, chatName: 'Чат 1'}, {id: 2, chatName: 'Чат 2'}, {id: 3, chatName: 'Чат 3'}, {id: 4, chatName: 'Чат 4'},
        {id: 5, chatName: 'Чат 5'}, {id: 6, chatName: 'Чат 6'}, {id: 7, chatName: 'Чат 7'}, {id: 8, chatName: 'Чат 8'},
        {id: 9, chatName: 'Чат 9'}, {id: 10, chatName: 'Чат 10'}, {id: 11, chatName: 'Чат 11'},
        {id: 12, chatName: 'Чат 12'}, {id: 13, chatName: 'Чат 13'},
        {id: 14, chatName: 'Чат 14'}, {id: 15, chatName: 'Чат 15'},
        {id: 16, chatName: 'Чат 16'}
    ]);

    const handleOnClickSendButton = () => {
        if (message) {
            let lastMessageId = messageList.length;
            setMessageList(messageList => ([...messageList, {
                chatId: 1,
                messageId: lastMessageId++,
                author: "User1",
                message: message
            }]));
            setMessage('');
        }
        inputRef.current?.focus();
    }

    useEffect(() => {
        let timer = null;
        const lastMessage = messageList[messageList.length - 1];
        if (messageList.length >= 1 && lastMessage.author !== "Bot") {
            timer = setTimeout(() => {
                let lastMessageId = messageList.length;
                setMessageList(messageList => ([...messageList, {
                    chatId: 1,
                    messageId: lastMessageId++,
                    author: "Bot",
                    message: "Bot message"
                }]));
            }, 1500);
        }
        inputRef.current?.focus();
        return () => clearTimeout(timer)
    }, [messageList]);


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>
                            <List style={{ display: 'flex'}}>
                                <ListItem>
                                    <Link href="/" style={{ color: 'white' }}>Home</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/chat" style={{ color: 'white' }}>Chat</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/profile" style={{ color: 'white' }}>Profile</Link>
                                </ListItem>
                            </List>
                        </Toolbar>
                    </AppBar>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Item style={{height: '10vh'}}>
                                <Stack direction="row" style={{ alignItems: 'center'}}>
                                    <TextField fullWidth id="standard-basic" label="Поиск" variant="standard"/>
                                    <SearchIcon/>
                                </Stack>
                            </Item>
                            <Item style={{height: '10vh'}}>
                                <Stack direction="row" style={{ alignItems: 'center'}}>
                                    <TextField fullWidth id="standard-basic" label="Добавить чат" variant="standard"/>
                                    <AddIcon/>
                                </Stack>
                            </Item>
                            <Item style={{height: '58vh', overflowX: 'auto'}}>
                                <ChatList />
                            </Item>
                        </Grid>
                        <Grid item xs={9}>
                            <Item style={{ alignItems: 'center', height: '10vh'}}>
                                <Chip icon={<InboxIcon/>} label="Чат 1" variant="outlined"/>
                            </Item>
                            <Item style={{height: '58vh', overflowX: 'auto'}}>
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
                            <Item style={{height: '10vh'}}>
                                <Stack direction="row" style={{ alignItems: 'center'}}>
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

