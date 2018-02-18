import Shape from './shape';


class Hexagon extends Shape{
    constructor(_center, _edgeLength){
        super(_center);
        this.id = this.randNum(10000);
        this._edgeLength = _edgeLength;
        this.width = this._edgeLength * 2;
        this.height = this.width * 3/4;
        this.vertices = this.getVertices();
            
    }

    getVertices(){
        let arr = [1, 2, 3, 4, 5, 6];

        return arr.map((vertice, i) =>{
            return this.getVertice(i);
        })
    }

    
}



export default Hexagon;