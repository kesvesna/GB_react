import './App.css';
import {useState, useEffect, useRef} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

export function App(props) {

    const userMessageStyle = "user-message d-flex justify-content-end bg-gradient";

    const botMessageStyle = "robot-message d-flex bg-gradient";

    const [messageList, setMessageList] = useState([{}]);

    const [message, setMessage] = useState('');

    const [chatList, setChatList] = useState([
        {id: 1, chatName: 'Чат 1'}, {id: 2, chatName: 'Чат 2'}, {id: 3, chatName: 'Чат 3'}, {id: 4, chatName: 'Чат 4'},
        {id: 5, chatName: 'Чат 5'}, {id: 6, chatName: 'Чат 6'}, {id: 7, chatName: 'Чат 7'}, {id: 8, chatName: 'Чат 8'},
        {id: 9, chatName: 'Чат 9'}, {id: 10, chatName: 'Чат 10'}, {id: 11, chatName: 'Чат 11'},
        {id: 12, chatName: 'Чат 12'}, {id: 13, chatName: 'Чат 13'},
        {id: 14, chatName: 'Чат 14'}, {id: 15, chatName: 'Чат 15'},
        {id: 16, chatName: 'Чат 16'}
    ]);

    const inputMessageRef = useRef(null);

    const handleOnClickSendButton = () => {
        if (message) {
            let lastMessageId = messageList.length;
            setMessageList(messageList => ([...messageList, {
                messageId: lastMessageId++,
                author: "User1",
                message: message,
                styleInfo: userMessageStyle
            }]));
            setMessage('');
            inputMessageRef.current?.focus();
        }
    }

    useEffect(() => {
        let timer = null;
        const lastMessage = messageList[messageList.length - 1];
        if (messageList.length > 1 && lastMessage.author !== "Bot") {
            timer = setTimeout(() => {
                let lastMessageId = messageList.length;
                setMessageList(messageList => ([...messageList, {
                    messageId: lastMessageId++,
                    author: "Bot",
                    message: "Bot message",
                    styleInfo: botMessageStyle
                }]));
            }, 1500);
        }
        return () => clearTimeout(timer)
    }, [messageList]);

    useEffect(() => {
        inputMessageRef.current.focus();
    }, []);

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

    return (

        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="container-fluid">
                    <Container className="left-side-block bg-light">
                        <Stack direction="row" className="search-row">
                            <TextField size="small" fullWidth label="Найти" variant="outlined"/>
                            <Button className="search-button" variant="outlined"><SearchIcon/></Button>
                        </Stack>
                        <List className="left-side-block-chat-info">
                            {chatList.map((item) => (
                                <ListItem disablePadding key={item.id}>
                                    <ListItemButton>
                                        <ListItemText primary={item.chatName}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                    <div className="right-side-block col-8 bg-light">
                        <Typography className="chat-name">Чат 1</Typography>
                        <div className="right-side-block-chat-message">
                            {messageList.map((item) => (
                                <div className={item.styleInfo} key={item.messageId}>
                                    <p className="align-self-center">{item.message}</p>
                                </div>
                            ))}
                        </div>
                        <Stack direction="row">
                            <TextField fullWidth label="Введите текст сообщения" variant="outlined"
                                       ref={inputMessageRef} value={message}
                                       onChange={(e) => setMessage(e.target.value)}/>
                            <Button variant="outlined" onClick={handleOnClickSendButton}><SendIcon/></Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

