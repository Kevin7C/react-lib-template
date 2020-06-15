import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Test from 'react-test';
const appElement = document.getElementById('example');


class App extends Component {
  render() {
    return (
      <div>
        <Test/>
      </div>
    );
  }
}

ReactDOM.render(<App />, appElement);