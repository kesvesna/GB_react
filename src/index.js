import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProfilePage} from "./pages/profile/ProfilePage";
import {store, persistor} from "./store/create-store";
import {Provider, useDispatch} from "react-redux";
import {MyNavBar} from './components/presentations/AppBar/AppBar';
import {HomePage} from "./pages/home/HomePage";
import {ErrorPage} from "./pages/error/ErrorPage";
import {PersistGate} from 'redux-persist/integration/react'
import {GistPage} from "./pages/gist/GistPage";
import {LoginPage} from "./pages/login/LoginPage";
import {SignUpPage} from "./pages/sign-up/SignUpPage";
import {PrivateRoute, PublicRoute} from "./components/route/Route";
import {onAuthStateChanged, sessionSelector} from "./store/session";
import {useSelector} from "react-redux";
import {nanoid} from "nanoid";
import {addNewMessageToChat} from "./api/v1/chats/chats";

export function Main() {

    const session = useSelector(sessionSelector);

    const dispatch = useDispatch();
    //const isAuth = !!session?.email;
    const isAuth = true;

    useEffect(() => {
        dispatch(onAuthStateChanged());
        //addNewMessageToChat('-Mne9bgZAnZJxToME7tY', {messages: 'test message'});
    }, [dispatch])

    return (
        <>
            <MyNavBar isAuth={isAuth}/>
            <Switch>
                <PrivateRoute path="/profile" isAuth={isAuth}>
                    <ProfilePage/>
                </PrivateRoute>
                <PrivateRoute exact path="/chats/:id?" isAuth={isAuth}>
                    <App/>
                </PrivateRoute>
                <PrivateRoute exact path="/gist" isAuth={isAuth}>
                    <GistPage/>
                </PrivateRoute>
                <PublicRoute exact path="/login" isAuth={isAuth}>
                    <LoginPage/>
                </PublicRoute>
                <PublicRoute exact path="/sign-up" isAuth={isAuth}>
                    <SignUpPage/>
                </PublicRoute>
                <PublicRoute exact path="/" isAuth={isAuth}>
                    <HomePage/>
                </PublicRoute>
                <PublicRoute path="*" isAuth={isAuth}>
                    <ErrorPage/>
                </PublicRoute>
            </Switch>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Main/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
);
