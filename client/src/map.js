import React, { Component } from 'react';
import Brush from './Models/brush';
import HexMapGenerator from './Implementation/hexMapGenerator';
import SquareMapGenerator from './Implementation/squareMapGenerator';
import CatGenerator from './Implementation/catGenerator';
import Requests from './Requests/requests';

let tiles = [];
let flag = 0;
let rect;

class Map extends Component {

  componentDidMount() {
    this.updateCanvas();
  }

  checkDrag(){
    if(flag == 1){
      console.log("DRAG");
      return;
    }
    if(flag == 0){
      console.log("CLICK")
    }
  }

  setflag(){
    flag = 1;
  }

  selectHex(e){
    let x = e.pageX - rect.left;
    let y = e.pageY - rect.top;
    let req = new Requests();
    flag = 0;

     tiles.forEach((tile) => {
       let isInside = tile.isInside(x, y);
       if(isInside){
         req.get('http://10.196.10.220:3001/activities/getActivities', (response) => {
           console.log(response);
         });
         return;
       }
     });

    

    console.log(x ,y);
  }

  updateCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    rect = canvas.getBoundingClientRect();

    let brush = new Brush(ctx);

    let catGenerator = new CatGenerator();
    catGenerator.generateCat(1);

    //let mapGenerator = new HexMapGenerator();
    //let mapGenerator = new SquareMapGenerator();

    // tiles = mapGenerator.tiles;
  
    tiles.forEach(tile => {
      let img = new Image();
      //console.log(require('./images/activity-images/'))
      img.src = require("./images/activity-images/recycle-bin.svg"); //"https://mdn.mozillademos.org/files/5397/rhino.jpg";
      img.onload = () => {
        brush.drawImage(img, tile._center, tile._edgeLength)
      }
    })

    // tiles.forEach(element => {
    //   //brush.drawHex(element);
    //   brush.drawRect(element._center[0], element._center[1],
    //                   element._edgeLength, element._edgeLength);
    // });

  }

  render() {
    return (
      <div className="Map">
        <canvas id="canvasMap"
          ref="canvas"
          onMouseDown={this.selectHex}
          onMouseMove={this.setflag}
          onMouseUp={this.checkDrag}
          height="450"
          width="600"
          alt="My Map">
        </canvas>
      </div>
    );
  }
}

export default Map;
