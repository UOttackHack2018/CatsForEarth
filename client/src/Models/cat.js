import Eyes from './eyes'
import Lips from './lips';
import Head from './head';
import Nose from './nose';
import Ears from './ear';

class Cat{
    constructor(rarity){
        this.rarity = rarity;
        this.eyes;
        this.nose;
        this.head;
        this.mouth;
        this.ears;

        this.createCat();
    }

    createCat(){
        this.eyes = new Eyes(this.rarity);
        this.head = new Head(this.rarity);
        this.mouth = new Mouth(this.rarity);
        this.lips = new Mouth(this.rarity);
        this.ears = new Ears(this.rarity);
    }
}


export default Cat;