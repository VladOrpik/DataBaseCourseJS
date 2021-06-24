import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import { FLIGHTS_ROUTE } from '../utils/consts';
import {Context} from '../index';

const AppRouter = ()=>{
    const {user} = useContext(Context);

    console.log(user);
    return (
        <Switch>

            {user.isAuth && authRoutes.map(({path, Component}) =>
                 <Route key={path} path = {path} component={Component}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                 <Route key={path} path = {path} component={Component}/>
            )}
            <Redirect to={FLIGHTS_ROUTE}/>
           
        </Switch>
    );
};

export default AppRouter;