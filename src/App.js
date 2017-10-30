import React, { Component } from 'react';
import logo from './logo.svg';
import Orders from './component/orders';
import Snapshot from './component/snapshot';
import StatTile from './component/stat-tile';
import ControlsMenu from './component/controls-menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
        <Orders/>
        <Snapshot/>
        <StatTile/>
        <ControlsMenu/>
        
      </div>
    );
  }
}

export default App;
