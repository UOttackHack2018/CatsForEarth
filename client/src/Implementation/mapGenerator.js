import React, { Component } from 'react';

import Hexagon from '../Models/hexagon';
import Brush from '../Models/brush';


class MapGenerator{
    constructor(){
        this.edgeLength = 60;
        this.hexagons = this.getHexagons();
    }

    getHexagons(){
        let res = [];
        let xHex = new Hexagon([0,0], this.edgeLength);
        let xOffset = xHex.width;
        let yOffset = xHex.height;

        for(let x = 0; x < 3 * xOffset; x += xOffset){
            for(let y = 0; y < 2 * yOffset; y += yOffset){
                let hex = new Hexagon([x, y], this.edgeLength);
                console.log("Hexagon:", hex);
                res.push(hex);
            }
        }

        return res;
    };
}

export default MapGenerator;