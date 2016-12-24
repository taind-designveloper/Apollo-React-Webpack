import React, { Component } from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';

import MainLayout from '../ui/layouts/MainLayout.jsx';
import Home from '../ui/pages/Home/Home.jsx';
import About from '../ui/pages/About/About.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={MainLayout}>
          <Route name='home' path='/' component={Home}/>
          <Route name='about' path='/about' component={About}/>
        </Route>
      </Router>
    )
  }
}
render(<App/>, document.getElementById('app'));
