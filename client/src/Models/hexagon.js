

class Hexagon{
    constructor(_center, _edgeLength){
        this._center = _center;
        this._edgeLength = _edgeLength;
        this.height = this._edgeLength * 2;
        this.width = this.height * (3^(1/2)) / 2;
        this.vertices = this.getVertices();
            
    }

    getVertices(){
        let arr = [1, 2, 3, 4, 5, 6];

        return arr.map((vertice, i) =>{
            return this.getVertice(i);
        })
    }

    getVertice(i){
        var degrees = 60 * i + 30;
        var rad = degToRad(degrees);
        return [this._center[0] + this._edgeLength * Math.cos(rad),
                this._center[1] + this._edgeLength * Math.sin(rad)]
    }
}


var degToRad = (angle) => {
    return Math.PI / 180  * angle;
}

export default Hexagon;