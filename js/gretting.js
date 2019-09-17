const form = document.querySelector(".jsForm");
const input = form.querySelector("input");

const greeting = document.querySelector(".jsGreetings");

const User = "currentUser";
const showingClassName = "showing";

function saveName(text) {
  localStorage.setItem(User, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(showingClassName);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(showingClassName);
  greeting.classList.add(showingClassName);
  greeting.innerText = `hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(User);
  if (currentUser === null) {
    // he is not
    askForName();
  } else {
    // he is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
