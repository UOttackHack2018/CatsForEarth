class CatGenerator() {
    numGen() {
        return Math.random() * 100
    }
    
    generateCat(rarity) {
        var x = numGen();
        if ( x <= 5 * rarity){
            return {eyes: new Eyes("rare"),
                    lips: new Lips("rare"),
                    head: new Head("rare"),
                    nose: new Nose("rare"),
                    lips: new Lips("rare")};
            
        }
        if( x > 5  * rarity && x < 20 * rarity){
            return {eyes: new Eyes("moderate"),
                lips: new Lips("moderate"),
                head: new Head("moderate"),
                nose: new Nose("moderate"),
                lips: new Lips("moderate")};
        }
        
        return {eyes: new Eyes("average"),
            lips: new Lips("average"),
            head: new Head("average"),
            nose: new Nose("average"),
            lips: new Lips("average")};
        
    }
}