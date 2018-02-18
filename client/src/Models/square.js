import Shape from './shape';

class Square extends Shape{
    constructor(_center, _edgeLength){
        //center and corner angle
        super(_center, 90);
        this._edgeLength = _edgeLength;
        this.vertices = this.getVertices();
    }

    getVertices(){
        let arr = [1, 2, 3, 4];

        return arr.map((element, i) => {
            return this.getVertice(i);
        });
    }

}

export default Square;