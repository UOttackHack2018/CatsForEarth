import React, { Component } from 'react';
import '../styles/SideNav.css';

class SideNav extends Component {
    render() {
        let something = this.props.isNavActive ? "active" : "inactive"; 
        console.log(something)
        return (
            <div>
                <nav id="sidebar" className={this.props.isNavActive ? "active" : "inactive"}>

                    <div className="sidebar-header">
                        <h3>Collapsible Sidebar</h3></div>

                    <ul className="list-unstyled components">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SideNav;