import BodyParts from './bodyParts'

class Eyes  extends BodyParts{
    constructor(rarity) {
        super(rarity);
        this.rarity = rarity;
        this.height;
        this.width;
        this.color;
        
    }

}

export default Eyes;