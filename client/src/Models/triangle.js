import Shape from './shape'

class Triangle extends Shape{
    constructor(_center, _edgeLength){
        super(_center, 60);
        this._edgeLength = _edgeLength;
        this.vertices = this.getVertices();

    }

    getVertices(){
        let arr = [1, 2, 3];

        return arr.map((element, i) => {
            return this.getVertice(i);
        });
    }
}

export default Triangle;