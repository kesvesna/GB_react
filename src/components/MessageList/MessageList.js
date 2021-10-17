import './MessageList.css';
import Stack from '@mui/material/Stack';
import { Item } from 'react-dom';

export function MessageList({ currentMessages }) {
    return (
        <>
            {currentMessages.map((item) => (
                (item.author !== "Bot" &&
                    <Stack key={item.id} display="row" style={{alignItems: 'flex-end'}} marginBottom="10px">
                        <Item key={item.id} style={{width: '50%'}}>
                            {item.message}
                        </Item>
                    </Stack>)
                ||
                (item.author === "Bot" &&
                    <Stack key={item.id} display="row" style={{alignItems: 'flex-start'}} marginBottom="10px">
                        <Item key={item.id} style={{width: '50%'}}>
                            {item.author + ": "}{item.message}
                        </Item>
                    </Stack>)
            ))
            }
        </>
    );
}