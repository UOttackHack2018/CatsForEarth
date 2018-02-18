import Square from './square';
import Triangle from './triangle';
import Circle from './circle';

class BodyParts{
    constuctor(rarity, bodyPart){
        this.rarity = rarity;
        this.shape;
        this.color;
        this.setProperties();
    }

    genNum(){
        return Math.random();
    }

    setProperties(){
        if(this.rarity == 'rare'){
            this.shape = new Square([100, 100], 60);
            this.color = "#56123f";
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