const form = document.querySelector("form");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const msgArea = document.getElementById("msgArea");
const sendBtn = document.getElementById("sendBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const sentMsg = document.getElementById("sentMsg");
form.addEventListener("submit", function (event) {
  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  }
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Please enter a valid email address containing '@'.";
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
    return;
  }
  event.preventDefault()
  sentMsg.textContent = "Message sent!";
  form.reset();
});