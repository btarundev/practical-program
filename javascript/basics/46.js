// JavaScript practical question 46
document.querySelector("form")?.addEventListener("submit", event => { if (!event.target.checkValidity()) event.preventDefault(); });

