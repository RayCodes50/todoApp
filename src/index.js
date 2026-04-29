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
const todoTest = createTodo(todoControl.readTodo(1));
// const todoTest2 = createTodo(todoControl.readTodo(0));
todoControl.loadTodo();

console.log(todoControl.getTodos());
console.log(todoControl.readTodo(1));
console.log(todoControl.readTodo());
console.log(todoTest);
// console.log(todoTest2);
todoList.appendChild(todoTest);

window.todo = todoControl;
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

console.log(todoControl.getTodos());
