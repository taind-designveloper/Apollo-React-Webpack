import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div>
        <p> This is About Page 3</p>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
