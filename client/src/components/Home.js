import React, { Component } from 'react';
import '../styles/Home.css';

export const Home = () => {

    return (
        <div className="white-container">
            <div className="white-inner-container">
                <h1>MY CATS</h1>
                <div className="home-inner-container">
                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/cat-images/Ramo.png")} alt="skill-pic" />
                        <h2>Ramo</h2>
                        
                    </div>

                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/cat-images/littlecat.png")} alt="skill-pic" />
                        <h2>Bob</h2>
                        
                    </div>

                </div>               
            </div>
        </div>
    )
}
