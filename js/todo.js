const todoForm = document.querySelector(".todoFormJs");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

const todos_ls = "todos";

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  todoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);

  todoInput.value = "";
}

function loadTodo() {
  const todos = localStorage.getItem(todos_ls);
  if (todos !== null) {
  }
}

function init() {
  loadTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
