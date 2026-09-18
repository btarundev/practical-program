// Run in a browser on a page with a button whose id is "action".
const button = document.querySelector("#action");
let clickCount = 0;

button?.addEventListener("click", () => {
  clickCount += 1;
  console.log(`Clicked ${clickCount} time(s)`);
});

window.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-action='log']")) console.log("Event delegation worked");
});
