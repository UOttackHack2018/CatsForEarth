import React, { Component } from 'react';
import Brush from './Models/brush';
import MapGenerator from './Implementation/mapGenerator';

class Map extends Component {

  componentDidMount() {
    this.updateCanvas();
}
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    let brush = new Brush(this.context);
      let mapGenerator = new MapGenerator();

      mapGenerator.hexagons.forEach(element => {
        brush.drawHex(element);
      });
      //brush.drawRect(100, 100, 50 , 50);

  }

  render() {
    return (
      <div className="Map">
        <canvas is="canvasMap"
          ref="canvas"
          height="450"
          width="600"
          alt="My Map">
        </canvas>
      </div>
    );
  }
}

export default Map;