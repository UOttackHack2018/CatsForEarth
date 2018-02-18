
class Hexagon{
    constructor(_center, _edgeLength){
        this.id = randNum();
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

    isInside(x, y){
        let res = false;
        for(let i = 0, j = this.vertices.length - 1; i < this.vertices.length; j = i++){
            let xI = this.vertices[i][0], yI = this.vertices[i][1];
            let xJ = this.vertices[j][0], yJ = this.vertices[j][1];

            let intersect = ((yI > y) != (yJ > y)) && 
                            (x < (xJ - xI) * (y -yI) / (yJ - yI) + xI);
            if(intersect)
                res = ! res;
            
        }

        return res;
    }
}


var degToRad = (angle) => {
    return Math.PI / 180  * angle;
}

var randNum = () => {
    return Math.random() * 100;
}

export default Hexagon;