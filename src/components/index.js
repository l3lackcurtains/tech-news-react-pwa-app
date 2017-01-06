import React, { Component } from 'react';
import Header from './header'
class main extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default main;
