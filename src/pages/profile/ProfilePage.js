import './ProfilePage.css'
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import manulPicture from '../../images/avatar/Manul.PNG';

export function ProfilePage() {

    return (
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <Card sx={{width: '100vh', marginTop: '10px', height: '80vh'}}>
                <CardContent>
                    <Stack direction="row" sx={{display: 'flex', justifyContent: 'center', mb: 1.5}}>
                        <Avatar
                            alt="Manul picture"
                            src={manulPicture}
                            sx={{width: 200, height: 200, alignSelf: 'center'}}
                        />
                    </Stack>
                    <Typography sx={{mb: 1.5}} variant="h5" component="div">
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
                </CardContent>
            </Card>
        </div>
    )
}
