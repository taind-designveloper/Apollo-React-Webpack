import React, { Component } from 'react';
import './MainLayout.scss';

export default class MainLayout extends Component {
  render() {
    console.log(1);
    console.log(2);
    return (
      <div>
        <header> This is header </header>
        <hr/>
        <main className='container'> { this.props.children } </main>
        <hr/>
        <footer> this is footer </footer>
      </div>
    )
  }
}
