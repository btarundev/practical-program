// JavaScript practical question 44
fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => { if (typeof document !== "undefined") document.body.innerHTML = users.map(user => "<p>" + user.name + "</p>").join(""); });

