import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import React from "react";
import './AppBar.css';
import {firebaseApp} from "../../../api/v1/firebase/firebase";

const signOutFromFireBase = () => {
    firebaseApp.auth().signOut();
}

export function MyNavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <List className="app-bar-list">
                    <ListItem>
                        <Link href="/" className="app-bar-link">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/chats" className="app-bar-link">Chats</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/profile" className="app-bar-link">Profile</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/gist" className="app-bar-link">Gist</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/login" className="app-bar-link">Login</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/sign-up" className="app-bar-link">Sign-up</Link>
                    </ListItem>
                    <button onClick={signOutFromFireBase}>Exit</button>
                </List>
            </Toolbar>
        </AppBar>
    )
}
