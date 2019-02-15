import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';
import Game from './Game/Game';
import Table from './Table/Table';

// import Error from './Login/Error';
// import PageNotFound from './PageNotFound/PageNotFound';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/game" component={Game} />
            <Route path="/table" component={Table} />
            {/* <Route path='/*' component={PageNotFound} /> */}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
