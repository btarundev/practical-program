// JavaScript practical question 31
const validate = ({ name, email, phone, password }) => Boolean(name && /@/.test(email) && /^\\d{10}$/.test(phone) && password.length >= 8); console.log(validate({ name: "A", email: "a@example.com", phone: "1234567890", password: "password" }));

