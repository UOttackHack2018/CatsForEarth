import React, { Component } from 'react';
import '../styles/BuyCats.css';

export const BuyCats = () => {

    return (
        <div className="white-container">
            <div className="white-inner-container">
                <h1>BUY A CAT</h1>
                <div className="activity-inner-container">
                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/loot-boxes/red-gift.svg")} alt="skill-pic" />
                        <h2>Common</h2>
                        <p>Get a common cat</p>
                    </div>

                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/loot-boxes/blue-gift.svg")} alt="skill-pic" />
                        <h2>Rare</h2>
                        <p>Chance of getting a common or rare cat</p>
                    </div>

                    <div className="an-activity">
                        <img className="activity-image" src={require("../images/loot-boxes/gold-gift.svg")} alt="skill-pic" />
                        <h2>Epic</h2>
                        <p>Chance of getting a rare or epic cat</p>
                    </div>
                </div>               
            </div>
        </div>
    )
}
