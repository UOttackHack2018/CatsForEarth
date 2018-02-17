

class Brush{
    constructor(context){
        this.context = context;
    }

    drawRect(x, y, w, h, color = "#000000", fill = false){
        this.context.rect(x, y, w, h);
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        if(fill){
            this.context.fill();
            return;
        }
        
        this.context.stroke();
    }

    drawLine(sX, sY, eX, eY){
        this.context.beginPath();
        this.context.moveTo(sX, sY);
        this.lineTo(eX, eY);
        this.context.stroke();
    }
}

export default Brush;