import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import {BrowserRouter, Switch, Route} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppBar position="static">
                <Toolbar>
                    <List style={{display: 'flex'}}>
                        <ListItem>
                            <Link href="/" style={{color: 'white'}}>Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/chats" style={{color: 'white'}}>Chats</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/profile" style={{color: 'white'}}>Profile</Link>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/profile">
                    <h1>Profile page</h1>
                </Route>
                <Route exact path="/chats">
                    <App>
                    </App>
                </Route>
                <Route exact path="/chats/:id">
                    <App>
                    </App>
                </Route>
                <Route exact path="/">
                    <h1>Home page</h1>
                </Route>
                <Route path="*">
                    <h1>Error 404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

