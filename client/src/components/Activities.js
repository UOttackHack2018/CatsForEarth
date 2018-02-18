import React, { Component } from 'react';
import '../styles/Activities.css';

export const Activities = () => {

    return (
        <div className="green-container">
            <div className="green-inner-container">
                <h1>ACTIVITIES</h1>
                <div className="activity-inner-container">
                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/activity-images/bicycle.svg")} alt="skill-pic" />
                        <h2>Cycling</h2>
                        <h2>500 pts</h2>
                        <p>Cycle for 10 KM to earn full points</p>
                    </div>

                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/activity-images/recycle-bin.svg")} alt="skill-pic" />
                        <h2>Recycling</h2>
                        <h2>20 pts</h2>
                        <p>Scan the QR code or barcode of recycled item to get points</p>
                    </div>

                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/activity-images/shoe.svg")} alt="skill-pic" />
                        <h2>Running</h2>
                        <h2>500 pts</h2>
                        <p>Run for 5 KM to earn full points</p>
                    </div>
                </div>               
            </div>
        </div>
    )
}
