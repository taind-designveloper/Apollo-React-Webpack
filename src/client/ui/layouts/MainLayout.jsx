import React, { Component } from 'react';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <header> This is header </header>
        <hr/>
        <main> { this.props.children } </main>
        <hr/>
        <footer> this is footer </footer>
      </div>
    )
  }
}
