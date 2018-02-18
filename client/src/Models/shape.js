

class Shape{
    constructor(_center, cornerAngle){
        this._center = _center;
        this.cornerAngle = cornerAngle;
    }

    getVertice(i){
        var degrees = this.cornerAngle * i;
        var rad = this.degToRad(degrees);
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

    degToRad(angle){
        return Math.PI / 180  * angle;
    }

    randNum(range){
        return Math.floor(Math.random() * range);
    }
}

export default Shape;