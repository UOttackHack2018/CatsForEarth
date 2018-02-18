import React, { Component } from 'react';
import SideNav from "./components/SideNav";
import Map from './map';
<<<<<<< HEAD

=======
>>>>>>> Can now generate hex map.
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

          <header className="App-header">

            <div id="content">
              <button onClick={this.onSideNavClick.bind(this)} type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                <i className="glyphicon glyphicon-align-left"></i>
                Toggle Sidebar
              </button>
            </div>

            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
