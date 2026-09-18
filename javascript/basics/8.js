// JavaScript practical question 8
const number = 29; const prime = number > 1 && Array.from({ length: number - 2 }, (_, i) => i + 2).every(divisor => number % divisor !== 0); console.log(prime);

