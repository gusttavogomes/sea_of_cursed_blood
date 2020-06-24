import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import History from './pages/History';
import Rules from './pages/Rules';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Main}/>
               <Route path="/history" component={History}/>
               <Route path="/rules" component={Rules}/>
            </Switch>
        </BrowserRouter>
    )
};