import Cat from '../Models/cat';

class CatGenerator {
    numGen() {
        return Math.random() * 100
    }
    
    generateCat(likelyhood) {
        var x = this.numGen();
        if ( x <= 5 * likelyhood){
            return new Cat('rare')
        }
        if( x > 5  * likelyhood && x < 20 * likelyhood){
            return new Cat('moderate');
        }
        
        return new Cat('common');
        // return {eyes: new Eyes("average"),
        //     ears: new Ear('rare'),
        //     head: new Head("average"),
        //     nose: new Nose("average"),
        //     lips: new Lips("average")};
        
    }
}

export default CatGenerator;