import React, { Component } from 'react';
import SideNav from "./components/SideNav";

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavActive: true
    }
  }

  onSideNavClick() {
    if (this.state.isNavActive) {
      this.setState({ isNavActive: false })
    } else {
      this.setState({ isNavActive: true })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <SideNav isNavActive={this.state.isNavActive} />
        
        <div className="App">

          <div id="content" onClick={this.onSideNavClick.bind(this)}>
            <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
              <i className="glyphicon glyphicon-align-left"></i>
              Toggle Sidebar
            </button>
          </div>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
