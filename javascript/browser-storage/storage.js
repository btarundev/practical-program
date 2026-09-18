// Run in a browser console.
const key = "student";
const student = { name: "Asha", course: "JavaScript" };
localStorage.setItem(key, JSON.stringify(student));
console.log(JSON.parse(localStorage.getItem(key)));

sessionStorage.setItem("lastVisit", new Date().toISOString());
console.log(sessionStorage.getItem("lastVisit"));

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}
