// Run in a browser console on a page with an element whose id is "app".
const app = document.querySelector("#app") || document.body;
const heading = document.createElement("h1");
heading.textContent = "Dynamic DOM Example";
app.appendChild(heading);

const list = document.createElement("ul");
["Create", "Update", "Remove"].forEach((label) => {
  const item = document.createElement("li");
  item.textContent = label;
  list.appendChild(item);
});
app.appendChild(list);

const button = document.createElement("button");
button.textContent = "Toggle highlight";
button.addEventListener("click", () => heading.classList.toggle("highlight"));
app.appendChild(button);
