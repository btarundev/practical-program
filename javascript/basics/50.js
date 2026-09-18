// JavaScript practical question 50
function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); } const a = 12, b = 18; console.log(Math.abs(a * b) / gcd(a, b));

