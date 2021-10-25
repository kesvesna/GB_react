import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {increment, decrement} from './actions';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import manulPicture from '../images/avatar/Manul.PNG';
import {store} from './create-store';
import {useSelector} from "react-redux";

export {} from "./actions";
export {} from "./reducer";

export function ProfilePage() {

    const count = useSelector(()=>{
        return store.getState().ProfileReducer.count;
    });

    return (
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <Card sx={{width: '100vh', marginTop: '10px', height: '80vh'}}>
                <CardContent>
                    <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar
                            alt="Manul picture"
                            src={manulPicture}
                            sx={{width: 200, height: 200, alignSelf: 'center'}}
                        />
                    </Stack>
                    <Typography variant="h5" component="div">
                        Гончаренко Евгений
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Frontend: HTML, CSS, Javascript, React, PHP
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Backend: PHP, Mysql, PostgreSQL, Yii2
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Portfolio: <Link href="https://meacom.ru">meacom.ru</Link>, <Link
                        href="https://nalogplanet.ru">nalogplanet.ru</Link>,
                        <Link href="http://hdesk.space"> hdesk.space</Link>
                    </Typography>
                    <Typography variant="body2">
                        Count {count}
                    </Typography>
                </CardContent>
                <button style={{marginRight: '10px'}} onClick={()=>store.dispatch(increment())}>Increment</button>
                <button style={{marginBottom: '10px'}} onClick={()=>store.dispatch(decrement())}>Decrement</button>
            </Card>
        </div>
    )
}