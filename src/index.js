import React from "react";
import ReactDOM from "react-dom";

//BrowserRouter import {Router, Route, IndexRoute, hashHistory} from "react-router";
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'

//imports for persistent Store, not reset on refresh https://github.com/rt2zz/redux-persist#basic-usage
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage' 

import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import ArticleList from "./components/Pages/ArticleList";
import ArticleView from "./components/Post/ArticleView";
import ArticleEditor from "./components/Post/Editor";
import RedirectHome from "./components/RedirectHome";

//import history from './config/history';
//import createBrowserHistory from 'history/createBrowserHistory';
//import { signOut } from "./actions/index";
//const history = createBrowserHistory();

//Config persist store
const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)
//let store = createStore(reducers, applyMiddleware(thunk));
  
const app = document.getElementById('app');
ReactDOM.render(
    <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter /*history = {history}*/>
            <Layout>
                <Route exact path = "/" component = {ArticleList}/>
                <Route exact path = "/new/article" component = {ArticleEditor}/>
                <Route path="/article/:id" component={ArticleView} />
                <Route exact path = "/home" component = {Home}/>
                <Route exact path = "/signin" component = {Login}/>
                <Route exact path = "/logout" component = {Logout}/>
                <Route path = "/editor/:id" component = {ArticleEditor}/>
                <Route path = "/redirect"  component = {RedirectHome}/>
            </Layout>
        </BrowserRouter>
        </PersistGate>
    </Provider>, app);

//<ArticleList articles = {postEx}/>
//<Route path = "home" component = {Home}></Route>
//        <Route path = "/articles" component = {ArticleList}></Route>