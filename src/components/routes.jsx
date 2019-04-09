import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './views/index';
import GeoSegmentation from './views/geo-segmentation';

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/geographic-segmentation' exact component={GeoSegmentation} />
        </Switch>
    )
}

export default Routes;