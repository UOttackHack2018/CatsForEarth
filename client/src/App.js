import React, { Component } from 'react';
import SideNav from "./components/SideNav";
import Map from './map';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavActive: false
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
    const { isNavActive } = this.state;
    return (
      <div className="wrapper">
        <SideNav isNavActive={this.state.isNavActive} />
        
        <div className="App">

          <header className="App-header">

            <div id="content">
              <button onClick={this.onSideNavClick.bind(this)} type="button" id="sidebarCollapse" className={isNavActive ? "btn btn-info navbar-btn menu-margin" : "btn btn-info navbar-btn"}>
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>


          <Map /> 
        </div>
      </div>
    );
  }
}

export default App;
