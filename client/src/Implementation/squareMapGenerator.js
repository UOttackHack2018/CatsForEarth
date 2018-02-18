import Square from '../Models/square';


class SquareMapGenerator{
    constructor(){
        this.edgeLength = 60;
        this.tiles = this.getSquares();
    }

    getSquares(){
        let res = [];
        for(let x = 0; x < 10 * this.edgeLength; x += this.edgeLength){
            for(let y = 0; y < 10 * this.edgeLength; y += this.edgeLength){
                let sqr = new Square([x, y], this.edgeLength);
                console.log("Square:", sqr);
                res.push(sqr);
            }
        }

        return res;
    };
}

export default SquareMapGenerator;