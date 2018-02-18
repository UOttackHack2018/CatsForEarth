import Cat from './cat';

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
        this.context.lineTo(eX, eY);
        this.context.stroke();
    }

    drawHex(hex){
        let vertices = hex.vertices;
        for(let i = 0; i < 6; i++){
            this.drawLine(vertices[i][0], vertices[i][1], 
                     vertices[(i + 1) % 6][0], vertices[(i + 1) % 6][1]);
        }
    }

    drawImage(img, pos, edge){
        this.context.drawImage(img, pos[0], pos[1], edge, edge);
    }
}

export default Brush;