class BodyParts{
    constuctor(){
        this.shape;
    }

    setProperties(){
        if(this.type == 'rare'){
            this.shape = new Square()
        }
        else if(this.type == "moderate"){
            if(genNum() < 0.5)
                this.shape = new Triangle();
            else
                this.shape = new Circle();
        }
        else{
            this.shape = new Triangle();
        }
    }
}