import ctx, { size } from './main.js'

function chaoDrawing(ctx,size,x,y){
    //My Drawing
    const xpos=x * size
    const ypos=y * size
    ctx.lineWidth = 3
    ctx.strokeStyle="white"

    //Block
    ctx.beginPath()
    ctx.rect(xpos, ypos, size, size)
    ctx.fillStyle="cornflowerblue"
    ctx.fill()

    //triangle1
    ctx.beginPath();
    ctx.moveTo(xpos+28.25, ypos+20);
    ctx.lineTo(xpos+56.5+10, ypos+20+50);
    ctx.lineTo(xpos+56.5-10, ypos+20+50);
    ctx.closePath();
    ctx.stroke();

    //triangle2
    ctx.beginPath();
    ctx.moveTo(xpos+56.5, ypos+20);
    ctx.lineTo(xpos+56.5+10, ypos+20+50);
    ctx.lineTo(xpos+56.5-10, ypos+20+50);
    ctx.closePath();
    ctx.stroke();

    //triangle3
    ctx.beginPath();
    ctx.moveTo(xpos+84.75, ypos+20);
    ctx.lineTo(xpos+56.5+10, ypos+20+50);
    ctx.lineTo(xpos+56.5-10, ypos+20+50);
    ctx.closePath();
    ctx.stroke();

    //Dome
    ctx.beginPath()
    ctx.arc(xpos+56.5, ypos+56.5+44, 30, 0,Math.PI,true)
    ctx.lineTo(xpos+88, ypos+56.5+44)
    ctx.lineWidth=3
    ctx.stroke()
}
chaoDrawing(ctx,size,3,4)