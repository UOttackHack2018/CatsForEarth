import Square from './square';
import Triangle from './triangle';
import Circle from './circle';

class BodyParts{
    constuctor(rarity){
        this.shape;
        this.rarity = rarity;
        this.setProperties();
    }

    genNum(){
        return Math.random();
    }

    setProperties(){
        if(this.rarity == 'rare'){
            this.shape = new Square()
        }
        else if(this.rarity == "moderate"){
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