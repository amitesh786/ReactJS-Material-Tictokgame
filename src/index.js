import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';
import Game from './Game/Game';
import PageNotFound from './PageNotFound/PageNotFound';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/game" component={Game} />
            {/* <Route path='/*' component={PageNotFound} /> */}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
