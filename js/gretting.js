const form = document.querySelector(".jsForm");
const input = form.querySelector("input");

const greeting = document.querySelector(".jsGreetings");

const User = "currentUser";
const showingClassName = "showing";

function paintGreeting(text) {
  form.classList.remove(showingClassName);
  greeting.classList.add(showingClassName);
  greeting.innerText = `hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(User);
  if (currentUser === null) {
    // he is not
  } else {
    // he is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
