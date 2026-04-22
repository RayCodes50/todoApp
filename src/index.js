import "./styles.css";
import { todoControl } from "./todoObj.js";
window.todo = todoControl;
// localStorage.clear();
todoControl.loadTodo();

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

todoControl.readTodo(1);
todoControl.storeTodo();
todoControl.readTodo(0);
// todoControl.deleteTodo("e7215fb6-7938-4938-a35d-42f758001be8");
console.log(todoControl.getTodos());
