import React, { Component } from 'react';
import Order from './components/order';
import Shop from './components/shop';

class App extends Component {
  render() {
    return (
      <div>
        <Order/>
        <hr/>
        <Shop/>
      </div>
    );
  }
}

export default App;
