// JavaScript practical question 51
const number = 153, digits = String(number).length; console.log(number === [...String(number)].reduce((sum, digit) => sum + Number(digit) ** digits, 0));

