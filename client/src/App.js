import React, { Component } from 'react';
import SideNav from "./components/SideNav";
import { Activities, BuyCats, Leaderboard, Home } from './components';
import Map from './map';

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
        <SideNav isNavActive={this.state.isNavActive} onSideNavClick={this.onSideNavClick.bind(this)} />
        
        <div className="App">
          <span id="home-section"></span>
          <header className="App-header">

            <div id="content">
              <button onClick={this.onSideNavClick.bind(this)} type="button" id="sidebarCollapse" className={isNavActive ? "btn btn-dark navbar-btn menu-button-fixed menu-margin" : "btn btn-dark navbar-btn menu-button-fixed"}>
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <h1>CATS FOR EARTH</h1>
            <h3>Building a greener community. With cats.</h3>
          </header>
          <span className="anchor" id="home-section"></span>
          <Home/>

          <span className="anchor" id="activities-section"></span>
          <Activities />

          <span className="anchor" id="getCats-section"></span>
          <BuyCats />

          <span className="anchor" id="leaderboard-section"></span>
          <Leaderboard />
        </div>
      </div>
    );
  }
}

export default App;
