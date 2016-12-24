
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p> This is Home Page</p>
        <Link to='/about'>About</Link>
      </div>
    )
  }
}
