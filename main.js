const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const size = 113
const test = 'Hello World'

function getLocation(x, y) {
	return { x: x * size, y: y * size }
}

console.log('???')

// Default export ONLY ONE!
export default ctx
// named export 
export { size, test, getLocation }

