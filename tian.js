import ctx, { size } from './mian.js';

ctx.restore();

const x = 4 * size;
const y = 4 * size;

ctx.fill();

ctx.beginPath();
ctx.arc(x + size / 2, y + size / 2, 50, 0, Math.PI * 2, true); // Outer circle

ctx.arc(x + size / 2, y + 80, 25, 0, Math.PI, false); // Mouth (clockwise)

ctx.arc(x + 70, y + 80, 10, 0, Math.PI * 2, true); // Left eye

ctx.arc(x + size / 2, y + 37, 30, 0, Math.PI * 2, true); // Right eye
ctx.stroke();
