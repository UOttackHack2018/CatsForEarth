import Hexagon from '../Models/hexagon';

class HexMapGenerator{
    constructor(){
        this.edgeLength = 60;
        this.tiles = this.getHexagons();
        //this.hexagons = this.generate();
    }

    generate(){
        let hex1 = new Hexagon([100, 100], 60);
        let hex2 = new Hexagon([    hex1._center[0] + hex1.width * 3 / 4,
                                    hex1._center[1] + hex1.height/2], 60);
            return [hex1, hex2]
        
    }

    getHexagons(){
        let res = [];
        let xHex = new Hexagon([0,0], this.edgeLength);
        let xOffset = xHex.width * 4/3;
        let yOffset = xHex.height + this.edgeLength/2;

        for(let x = 0; x < 10 * xOffset; x += xOffset){
            for(let y = 0; y < 10 * yOffset; y += yOffset){
                let hex = new Hexagon([x, y], this.edgeLength);
                console.log("Hexagon:", hex);
                res.push(hex);
            }
        }

        return res;
    };
}

export default HexMapGenerator;