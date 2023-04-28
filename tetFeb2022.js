let val;

function openModalFunction(event){
    console.log(event.target.value);
    val = event.target.value;
    document.getElementById("myModal").style.display = "block";

}

function closeModalFunction(){
    document.getElementById("myModal").style.display = "none";
}

let count = 0;

function insertFunction(){
    let colorField = document.getElementById('colorField').value;
    let textField = document.getElementById('textField').value;
    count = count+1;
    console.log(colorField+':'+textField);
    let canvas = document.createElement("canvas");
    canvas.setAttribute('id',`count${count}`);
    if(colorField == ''){
        colorField = '#FFFFFF';
    }
    if(val == 'Circle'){
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = colorField;
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }else if(val == 'Rectangle'){
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = colorField;
        ctx.beginPath();
        ctx.rect(20, 20, 120, 70);
        ctx.stroke();
        ctx.fill();
    }else if(val == 'Arrow'){
        var ctx=canvas.getContext('2d');
        ctx.fillStyle = colorField;

        var headlen = 30;
        var angle = Math.atan2(100-10,100-10);
 
        ctx.save();
        
 
        //starting path of the arrow from the start square to the end square
        //and drawing the stroke
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(100, 100);
        ctx.lineWidth = 5;
        ctx.stroke();
        
        //starting a new path from the head of the arrow to one of the sides of
        //the point
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100-headlen*Math.cos(angle-Math.PI/7),
        100-headlen*Math.sin(angle-Math.PI/7));
 
        //path from the side point of the arrow, to the other side point
        ctx.lineTo(100-headlen*Math.cos(angle+Math.PI/7),
        100-headlen*Math.sin(angle+Math.PI/7));
 
        //path from the side point back to the tip of the arrow, and then
        //again to the opposite side point
        ctx.lineTo(100, 100);
        ctx.lineTo(100-headlen*Math.cos(angle-Math.PI/7),
        100-headlen*Math.sin(angle-Math.PI/7));
 
        //draws the paths created above
        ctx.stroke();
        ctx.restore();
        ctx.fill();
    }else if(val == 'Hexagon'){
        const context = canvas.getContext('2d');

        size = 40,
        x = 100,
        y = 100;
        
        context.stroke();
        context.fillStyle = colorField;
        context.beginPath();
        context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

        for (let side = 0; side < 7; side++) {
            context.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
        }
        context.stroke();
        context.fill();
    }else if(val == 'Star'){
        var ctx = canvas.getContext('2d');
        ctx.fillStyle=colorField;
        var rot=Math.PI/2*3;
        var x=100;
        var y=100;
        var step=Math.PI/5;
  
        ctx.beginPath();
        ctx.moveTo(100,100-30)
        for(i=0;i<5;i++){
            x=100+Math.cos(rot)*30;
            y=100+Math.sin(rot)*30;
            ctx.lineTo(x,y)
            rot+=step
  
            x=100+Math.cos(rot)*15;
            y=100+Math.sin(rot)*15;
            ctx.lineTo(x,y)
            rot+=step
        }
        ctx.lineTo(100,100-30);
        ctx.closePath();
        ctx.lineWidth=5;
        ctx.stroke();
        
        ctx.fill();
    }else if(val == 'Square'){
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = colorField;
        ctx.beginPath();
        ctx.rect(50, 50, 50, 50);
        ctx.stroke();
        ctx.fill();
    }
    document.getElementById("element").appendChild(canvas);
    document.getElementById("myModal").style.display = "none";
}



