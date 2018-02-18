import Square from './square';
import Triangle from './triangle';
import Circle from './circle';

class BodyParts{
    constuctor(){
        this.shape;
    }

    genNum(){
        return Math.random();
    }

    setProperties(){
        if(this.type == 'rare'){
            this.shape = new Square()
        }
        else if(this.type == "moderate"){
            if(this.genNum() < 0.5)
                this.shape = new Triangle();
            else
                this.shape = new Circle();
        }
        else{
            this.shape = new Triangle();
        }
    }
}

export default BodyParts