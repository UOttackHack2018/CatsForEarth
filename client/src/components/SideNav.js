import React, { Component } from 'react';
import '../styles/SideNav.css';
import logo from '.././logo.svg';

class SideNav extends Component {
    render() {
        let something = this.props.isNavActive ? "active" : "inactive"; 
        console.log(something)
        return (
            <div>
                <nav id="sidebar" className={this.props.isNavActive ? "active" : "inactive"}>

                    <div className="sidebar-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    
                    </div>

                    <ul className="list-unstyled components">
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#activities-section">Activities</a></li>
                        <li><a href="#getCats-section">Buy A Cat</a></li>
                        <li><a href="#leaderboard-section">Leaderboard</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SideNav;