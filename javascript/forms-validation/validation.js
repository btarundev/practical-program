// Run in a browser on a form with id="registration-form".
const form = document.querySelector("#registration-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const email = String(data.get("email") || "");
  const password = String(data.get("password") || "");
  const phone = String(data.get("phone") || "");
  const validEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  const validPhone = /^\\d{10}$/.test(phone);

  if (!validEmail || !validPhone || password.length < 8) {
    console.error("Use a valid email, 10-digit phone number, and 8-character password.");
    return;
  }
  console.log("Registration is valid", Object.fromEntries(data));
});
