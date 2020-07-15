import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import History from './pages/History';
import Rules from './pages/Rules';
import PlayerCharacter from './pages/PlayerCharacter';
import Art from './pages/Art';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Main}/>
               <Route path="/history" component={History}/>
               <Route path="/rules" component={Rules}/>
               <Route path="/player-character" component={PlayerCharacter}/>
               <Route path="/art" component={Art}/>
            </Switch>
        </BrowserRouter>
    )
};