import React, { Component } from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';

import MainLayout from '../ui/layouts/MainLayout.jsx';
import Home from '../ui/pages/Home/Home.jsx';
import About from '../ui/pages/About/About.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.routes = {
      component: MainLayout,
      childRoutes: [
        {
          path: '/',
          component: Home,
        }, {
          path: '/about',
          component: About,
        }
      ]
    }
  }
  render() {
    return (
      <Router history={hashHistory} routes={this.routes}/>
    )
  }
}
render(<App/>, document.getElementById('app'));
