const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.save();

const size = 113
const width = 113
const height = 113

// Default export ONLY ONE!
export default ctx
// named export 
export { size, width, height }

