import './App.css';
import {useState, useEffect} from 'react';

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

    const handleOnClickSendButton = () => {
        if(message){
            setMessageList(messageList => ([...messageList, {
                author: "User1",
                message: message,
                styleInfo: userMessageStyle
            }]));
            setMessage('');
        }
    }

    useEffect(() => {
        let timer = null;
        const lastMessage = messageList[messageList.length-1];
        if (messageList.length > 1 && lastMessage.author !== "Bot") {
            timer = setTimeout(() => {
                setMessageList(messageList => ([...messageList, {
                    author: "Bot",
                    message: "Bot message",
                    styleInfo: botMessageStyle
                }]));
            }, 1500);
        }
        return () => clearTimeout(timer)
    }, [messageList]);

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="left-side-block col-3 bg-light">
                    <div className="left-side-block-header">
                        <div className="input-group">
                            <input type="search" className="form-control rounded" placeholder="Поиск"/>
                            <button type="button" className="btn btn-outline-primary">Найти</button>
                        </div>
                    </div>
                    <div className="left-side-block-chat-info">
                        {chatList.map((item) => (
                            <div className="chat-name" key={item.id}>
                                <p className="align-self-center">{item.chatName}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-side-block col-8 bg-light">
                    <div className="right-side-block-header bg-light">
                        <p>Чат 1</p>
                    </div>
                    <div className="right-side-block-chat-message">
                        {messageList.map((item) => (
                            <div className={item.styleInfo} key={item}>
                                <p className="align-self-center">{item.message}</p>
                            </div>
                        ))}
                    </div>
                    <div className="right-side-block-message-input bg-light">
                        <div className="input-group message-input">
                            <input type="text" className="form-control" placeholder="Введите текст сообщения"
                                   value={message} onChange={(e) => setMessage(e.target.value)}/>
                            <button className="btn btn-outline-success" onClick={handleOnClickSendButton}>Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

