import React, { Component } from 'react';
import Brush from './Models/brush';
import MapGenerator from './Implementation/mapGenerator';
import Requests from './Requests/requests';

let hexagons = [];
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

    hexagons.forEach((hex) => {
      let isInside = hex.isInside(x, y);
      if(isInside){
        req.get('10.196.10.220:3000/activities/getActivities', (response) => {
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
    let mapGenerator = new MapGenerator();

    hexagons = mapGenerator.hexagons;

    hexagons.forEach(element => {
      brush.drawHex(element);
    });

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