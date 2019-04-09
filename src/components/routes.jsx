import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './views';

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={Index} />
        </Switch>
    )
}

export default Routes;