import Eyes from './eyes'
import Lips from './lips';
import Head from './head';
import Nose from './nose';
import Ear from './ear';

class Cat{
    constructor(rarity){
        this.rarity = rarity;
        this.eyes;
        this.nose;
        this.head;
        this.mouth;
        this.ear;

        this.createCat();
    }

    createCat(){
        if(this.rarity == 'rare'){
            this.eyes = new Eyes('rare')
        }
    }
}


export default Cat;