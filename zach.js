import ctx, { size } from './main.js'

const x = 1 * size
const y = 4 * size

ctx.beginPath()
ctx.moveTo(x + (size / 2), y) // Top middle
ctx.lineTo(x + 113, y + 113) // Bottom right
ctx.lineTo(x, y + 113) // Bottom left
ctx.lineTo(x + (size / 2), y) // Back to top middle
ctx.strokeStyle = 'indigo'
ctx.stroke()

ctx.beginPath()
ctx.moveTo(x + (size / 2), y + 113) // Bottom middle 
ctx.lineTo(x, y) // Top left
ctx.lineTo(x + 113, y) // Top right
ctx.lineTo(x + (size / 2), y + 113) // Bottom middle 
ctx.strokeStyle = 'indigo'
ctx.stroke()