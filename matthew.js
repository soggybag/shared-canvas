import ctx, { size } from './main.js'

ctx.restore()

const x = 2 * size
const y = 0 * size

// Ender Man by Matthew Wei
// Draw a square
ctx.beginPath()
ctx.rect(x, y, size, size)
ctx.fillStyle = '#000000'
ctx.fill()

// Draw Eye One
ctx.beginPath()
ctx.rect(x + 0, y + 50, 42.375, 14.125)
ctx.fillStyle = '#FF00FF'
ctx.fill()

// Draw Eye Two
ctx.beginPath()
ctx.rect(x + 70, y + 50, 42.375, 14.125)
ctx.fillStyle = '#FF00FF'
ctx.fill()

// Draw Pupil One
ctx.beginPath()
ctx.rect(x + 14.125, y + 50, 14.125, 14.125)
ctx.fillStyle = 'purple'
ctx.fill()

// Draw Pupil Two
ctx.beginPath()
ctx.rect(x + 84.75, y + 50, 14.125, 14.125)
ctx.fillStyle = 'purple'
ctx.fill()
