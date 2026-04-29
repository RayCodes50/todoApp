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
todoControl.loadTodo();

console.log(todoControl.getTodos());
console.log(todoControl.readTodo(1).title);
console.log(todoControl.readTodo(0));
todoList.appendChild(createTodo(todoControl.readTodo(1)));
todoList.appendChild(createTodo(todoControl.readTodo(0)));

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

// prevents page from submiting and opens dialog
const todoForm = document.querySelector(".todo_form");
const todoDialog = document.querySelector("#todoDialog");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  todoDialog.showModal();
});
const form = document.querySelector(".todo_dialog_form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const clickedButton = e.submitter.value;
  if (clickedButton === "save" || clickedButton === "cancel") {
    const title = form.title.value;
    const description = form.description.value;
    const tags = form.tags.value;
    const priority = form.priority.value;
    const dueDate = form.dueDate.value;
    const notes = form.notes.value;
    console.log({ title, description, tags, priority, dueDate, notes });
  }
  document.querySelector("#todoDialog").close(clickedButton);
});
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
