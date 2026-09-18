// JavaScript practical question 65
console.log([ ..."hello" ].reduce((count, char) => ({ ...count, [char]: (count[char] || 0) + 1 }), {}));

