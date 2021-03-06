
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux';
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { createStore, combineReducers } from 'redux'
import {usersReducer} from "./component/Reducers";
const addressBookApp = combineReducers({
    users: usersReducer,
})
const store = createStore(addressBookApp)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} initialState={initialState} reducer={reducer}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
