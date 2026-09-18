// JavaScript practical question 30
document.querySelector("form")?.addEventListener("submit", event => { if (!event.target.checkValidity()) { event.preventDefault(); alert("Please complete the form"); } });

