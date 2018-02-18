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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Activities</a></li>
                        <li><a href="#">Get Cats</a></li>
                        <li><a href="#">Leaderboard</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SideNav;