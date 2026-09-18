// JavaScript practical question 59
const values = ["a", "b", "a"]; console.log(values.reduce((count, value) => ({ ...count, [value]: (count[value] || 0) + 1 }), {}));

