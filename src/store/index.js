import React from "react";
import {createStore} from "redux";
import {useSelector, useDispatch} from "react-redux";
import {ProfileReducer} from "./reducer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { setIncrement, setDecrement } from './actions';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import manulPicture from '../images/avatar/Manul.PNG';

export {} from "./actions";
export {} from "./reducer";

export function ProfilePage() {

    const store = createStore(ProfileReducer, {count: 0});

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const increment = () => dispatch(setIncrement());
    const decrement = () => dispatch(setDecrement());

    return (
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <Card sx={{width: '100vh', marginTop: '10px', height: '80vh'}}>
                <CardContent>
                    <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Avatar
                            alt="Manul picture"
                            src={manulPicture}
                            sx={{ width: 200, height: 200, alignSelf: 'center' }}
                        />
                    </Stack>
                    <Typography variant="h5" component="div">
                        Гончаренко Евгений
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Frontend: HTML, CSS, Javascript, React, PHP
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Backend: PHP, Mysql, PostgresQL, Yii2
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Portfolio: <Link href="https://meacom.ru">meacom.ru</Link>, <Link href="https://nalogplanet.ru">nalogplanet.ru</Link>,
                        <Link href="http://hdesk.space"> hdesk.space</Link>
                    </Typography>
                    <Typography variant="body2">
                        Count {count}
                    </Typography>
                </CardContent>
                <button style={{marginRight: '10px'}} onClick={increment}>Increment</button>
                <button style={{marginBottom: '10px'}} onClick={decrement}>Decrement</button>
            </Card>
        </div>
    )
}