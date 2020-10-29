import ctx, { size } from './main.js'

const x = 5 * size
const y = 2 * size

ctx.beginPath()
ctx.rect(x,y,size,size)
ctx.fillStyle = "red"
ctx.fill()

ctx.beginPath()
ctx.rect(x + 100, y + 30, 12.375, 4.125)
ctx.fillStyle = 'white'
ctx.fill()

ctx.beginPath()
ctx.rect(x + 20, y + 20, 32.375, 1.125)
ctx.fillStyle = 'white'
ctx.fill()

ctx.beginPath()
ctx.rect(x + 30, y + 50, 100.375, 45.125)
ctx.fillStyle = 'white'
ctx.fill()

ctx.beginPath()
ctx.rect(x + 70, y + 60, 20.375, 30.125)
ctx.fillStyle = 'pink'
ctx.fill()