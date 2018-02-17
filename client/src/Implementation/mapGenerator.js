import React, { Component } from 'react';

import Hexagon from '../Models/hexagon';


class MapGenerator{
    constructor(){
        this.edgeLength = 60;
        this.hexagons = () => {
            let res = [];
            for(let x = 0; x < 10; x++){
                for(let y = 0; y < 10; y++){
                    let hex = new Hexagon([x, y], this.edgeLength)
                    res.push(hex);
                }
            }

            return res;
        };

    }
}

export default MapGenerator;