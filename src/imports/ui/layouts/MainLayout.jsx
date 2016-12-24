import React, { Component } from 'react';
import './MainLayout.scss';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <header> This is Header 7 </header>
        <hr/>
        <main className='container'> { this.props.children } </main>
        <hr/>
        <footer> this is footer </footer>
      </div>
    )
  }
}
