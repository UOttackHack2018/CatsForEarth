import BodyParts from './bodyParts'

class Eyes  extends BodyParts{
    constructor(eyesType) {
        super();
        this.type = eyesType;
        this.height;
        this.width;
        this.color;
        
    }

}

export default Eyes;