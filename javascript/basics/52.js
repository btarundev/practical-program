// JavaScript practical question 52
const number = 28; const sum = Array.from({ length: number - 1 }, (_, i) => i + 1).filter(i => number % i === 0).reduce((a, b) => a + b, 0); console.log(sum === number);

