// JavaScript practical question 49
function gcd(a, b) { while (b) [a, b] = [b, a % b]; return Math.abs(a); } console.log(gcd(48, 18));

