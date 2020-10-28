import ctx, { size } from './main.js'

const x = 5 * size
const y = 2 * size

ctx.beginPath()
ctx.rect(x,y,size,size)
ctx.fillStyle = "red"
ctx.fill()