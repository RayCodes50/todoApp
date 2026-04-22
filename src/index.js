import "./styles.css";
import { todoControl } from "./todoObj.js";
window.todo = todoControl;

todoControl.addTodo(
  todoControl.createTodo("Pet lady", "Extreme", "Today", {
    completed: false,
    description: "Go and pet lady",
    notes: "One note two notes",
    checklist: "Placeholder",
    tags: ["cat", "four legs"],
  }),
);
todoControl.addTodo(
  todoControl.createTodo("Doggy", "Low", "Infinity", {
    completed: false,
    description: "Woof woof",
    notes: "One note two notes",
    checklist: "Placeholder2",
    tags: ["dog", "five legs"],
  }),
);
console.log(todoControl.readTodo(1));
console.log(todoControl.readTodo(0));
