const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.rect(230, 30, 40, 90)
ctx.fillStyle = '#ff00ff'
ctx.fill()