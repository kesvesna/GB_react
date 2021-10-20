import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import React from "react";
import './AppBar.css';

export function MyNavBar(){
    return (
        <AppBar position="static">
            <Toolbar>
                <List className="app-bar-list">
                    <ListItem>
                        <Link href="/" className="app-bar-link">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/chats"  className="app-bar-link">Chats</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/profile"  className="app-bar-link">Profile</Link>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
    )
}
