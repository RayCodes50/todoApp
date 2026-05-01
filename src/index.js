import "./styles.css";
import { todoControl } from "./todoObj.js";
import { createMainHeaderTemplate } from "./mainTemplate.js";
import { createBodyTemplate } from "./bodyTemplate.js";
import { createTodo } from "./todoCreate.js";
const topSection = document.getElementById("head_section");
const bodySection = document.getElementById("body_section");
topSection.innerHTML = createMainHeaderTemplate();
bodySection.innerHTML = createBodyTemplate();
const todoList = bodySection.querySelector("#todoList");
const initial = todoControl.createTodo("Pet Lady", 5, "14/09/1991", {
  description: "Pet lady the white cat for 5 min",
  completed: false,
  notes: "My little Lady 7 years old cat",
  tags: "4 legs",
});
todoControl.addTodo(initial);

todoControl.loadTodo();
renderTodos();
window.todoControl = todoControl;

// event handlers
// all active completed filter section todo_f_wrap
const btnsFilter = document.querySelector(".todo_f_wrap");
btnsFilter.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  if (e.target.classList.contains("todo_f_section")) {
    const filters = document.querySelectorAll(".todo_f_section");
    filters.forEach((btn) => btn.classList.remove("active"));
  }
  e.target.classList.add("active");
});

// prevents page from submitting and opens dialog
const todoForm = document.querySelector(".add_task_btn");
const todoDialog = document.querySelector("#todoDialog");
todoForm.addEventListener("click", () => {
  todoDialog.showModal();
});
// creates todo and saves to memory
const form = document.querySelector(".todo_dialog_form");
form.addEventListener("submit", (e) => {
  const clickedButton = e.submitter.value;
  if (clickedButton !== "save") return;
  const data = new FormData(form);
  const todo = {
    title: data.get("title"),
    description: data.get("description"),
    tags: data.get("tags"),
    priority: data.get("priority"),
    dueDate: data.get("dueDate"),
    notes: data.get("notes"),
  };

  const { title, priority, dueDate, ...options } = todo;
  document.querySelector("#todoDialog").close(clickedButton);
  const createdTodo = todoControl.createTodo(title, priority, dueDate, options);
  todoControl.addTodo(createdTodo);
  renderTodos();
});
todoDialog.addEventListener("close", () => {
  form.reset();
});

function renderTodos() {
  const todos = todoControl.getTodos();
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    todoList.appendChild(createTodo(todo, handleDelete));
  });
}

function handleDelete(id) {
  console.log(`Delete handle initiated`);
  todoControl.deleteTodo(id);
  renderTodos();
}

//delete btn functionality

// btnsFilter.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (e.target.classList.contains("active")) return;
//   });
// });

// localStorage.clear();

// todoControl.addTodo(
//   todoControl.createTodo("Pet lady", "Extreme", "Today", {
//     completed: false,
//     description: "Go and pet lady",
//     notes: "One note two notes",
//     checklist: "Placeholder",
//     tags: ["cat", "four legs"],
//   }),
// );
// todoControl.addTodo(
//   todoControl.createTodo("Doggy", "Low", "Infinity", {
//     completed: false,
//     description: "Woof woof",
//     notes: "One note two notes",
//     checklist: "Placeholder2",
//     tags: ["dog", "five legs"],
//   }),
// );
