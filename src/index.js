import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProfilePage} from "./pages/profile/ProfilePage";
import {store, persistor} from "./store/create-store";
import {Provider} from "react-redux";
import {MyNavBar} from './components/presentations/AppBar/AppBar';
import {HomePage} from "./pages/home/HomePage";
import {ErrorPage} from "./pages/error/ErrorPage";
import {PersistGate} from 'redux-persist/integration/react'
import {GistPage} from "./pages/gist/GistPage";
import {LoginPage} from "./pages/login/LoginPage";
import {SignUpPage} from "./pages/sign-up/SignUpPage";
import {PrivateRoute, PublicRoute} from "./components/route/Route";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MyNavBar/>
                    <Switch>
                        <PrivateRoute path="/profile">
                            <ProfilePage/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/chats/:id?">
                            <App/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/gist">
                            <GistPage/>
                        </PrivateRoute>
                        <PublicRoute exact path="/login">
                            <LoginPage/>
                        </PublicRoute>
                        <PublicRoute exact path="/sign-up">
                            <SignUpPage/>
                        </PublicRoute>
                        <PublicRoute exact path="/">
                            <HomePage/>
                        </PublicRoute>
                        <PublicRoute path="*">
                            <ErrorPage/>
                        </PublicRoute>
                    </Switch>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

