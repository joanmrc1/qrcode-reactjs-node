import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Gerador from './pages/Gerador';

function Routes() {
    return (
        <Switch>
            <Route path="/" component={Gerador} />
        </Switch>
    );
}

export default Routes;