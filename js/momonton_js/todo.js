const todoForm = document.querySelector(".todoFormJs");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");
const todos_ls = "todos";
let toDos = [];

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = toDos.filter(function(todo) {
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanTodos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(todos_ls, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteTodo);

  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;

  todoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);

  todoInput.value = "";
}

function loadTodo() {
  const loadedTodos = localStorage.getItem(todos_ls);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function(todo) {
      paintTodo(todo.text);
    });
  }
}

function init() {
  loadTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
