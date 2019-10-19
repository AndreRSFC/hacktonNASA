import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import MountMap from './modules/mountMap';

ReactDOM.render(  
<Router>
    <Route path="/" exact={true} component={App} />
    <Route path="/telinha" exact={true} component={MountMap} />
</Router>, document.getElementById('root'));
