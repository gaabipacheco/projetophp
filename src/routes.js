import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import RegisterUser from'./views/register-user';
import ListUser from'./views/list-user';
import DetailUser from './views/detail-user';

const Routes = () => (
    <Switch>
        {/* <Route exact path="/" component = {xxx} /> */}
        <Route path="/register-user" component={RegisterUser} />
        <Route path="/list-user" component={ListUser} />
        <Route path="/detail-user/:id" component={DetailUser} />
    </Switch>

);
export default Routes;