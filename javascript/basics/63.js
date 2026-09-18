// JavaScript practical question 63
const text = "JavaScript".toLowerCase(); console.log({ vowels: [...text].filter(c => "aeiou".includes(c)).length, consonants: [...text].filter(c => /[a-z]/.test(c) && !"aeiou".includes(c)).length });

