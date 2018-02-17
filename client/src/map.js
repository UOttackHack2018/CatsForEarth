import React, { Component } from 'react';
import Brush from './Models/brush';


class Map extends Component {
    componentDidMount(){
        let brush = new Brush(this.context);
        brush.drawRect(100, 100, 50 , 50);
    }

  render() {
    return (
      <div className="Map">
        <canvas is="canvasMap" ref={(c) => this.context = c.getContext('2d')} height="450" width="600" alt="My Map"></canvas>
      </div>
    );
  }
}

export default Map;
