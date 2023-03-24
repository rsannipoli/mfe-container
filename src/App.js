import React from 'react';
import UsersApp from './components/UsersApp';
import {BrowserRouter} from "react-router-dom";

export default () => {
    return <>
        <BrowserRouter>
            <h1>component</h1>
            <hr />
            <UsersApp />
        </BrowserRouter>
    </>;
}