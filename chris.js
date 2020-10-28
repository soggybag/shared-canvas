import ctx, {size} from "./main.js"

const x = 3 * size
const y = 1 * size

// draw a square
ctx.beginPath()
ctx.rect(x, y, size, size)
ctx.fillStyle = 'black'
ctx.fill()

// draw a circle 
ctx.beginPath()
// draw a complete circle
ctx.arc(x + size / 2, y + size / 2, 50, 0, Math.PI * 2)
ctx.fillStyle = '#aaaaaa'
ctx.fill()

// draw a circle 
ctx.beginPath()
// draw a complete circle
ctx.arc(x + size / 2, y + size / 2, 40, 0, Math.PI * 2)
ctx.fillStyle = '#bbbbbb'
ctx.fill()

// draw a circle 
ctx.beginPath()
// draw a complete circle
ctx.arc(x + size / 2, y + size / 2, 30, 0, Math.PI * 2)
ctx.fillStyle = '#cccccc'
ctx.fill()

// draw a circle 
ctx.beginPath()
// draw a complete circle
ctx.arc(x + size / 2, y + size / 2, 20, 0, Math.PI * 2)
ctx.fillStyle = '#dddddd'
ctx.fill()

// draw a circle 
ctx.beginPath()
// draw a complete circle
ctx.arc(x + size / 2, y + size / 2, 10, 0, Math.PI * 2)
ctx.fillStyle = '#eeeeee'
ctx.fill()

// draw a circle 
ctx.beginPath()
// draw a complete circle
ctx.arc(x + size / 2, y + size / 2, 5, 0, Math.PI * 2)
ctx.fillStyle = '#ffffff'
ctx.fill()

// Draw some text
ctx.beginPath()
ctx.font = '18px Helvetica'
ctx.fillStyle = 'white'
ctx.fillText('chris says hi', x + 8, y + 55)
