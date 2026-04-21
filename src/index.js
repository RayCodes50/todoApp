import "./styles.css";
import { todoControl } from "./todoObj.js";
window.todo = todoControl;
console.log("Webpack starter running");
todoControl.readTodo(0);
todoControl.changeTodo(0, { title: "Pet Lady" });
todoControl.readTodo(0);
todoControl.changeTodo(0, { priority: "Low" });
todoControl.readTodo(0);
todoControl.changeTodo(0, { completed: "true" });
todoControl.readTodo(0);
todoControl.readTodo(1);
todoControl.addTodo(
  todoControl.createTodo("Pet dog", "High", "Today", {
    completed: false,
    tags: ["dog", "5 legs"],
  }),
);
todoControl.readTodo(2);
todoControl.deleteTodo("fab458fd-6d83-4f5c-81eb-ac2298a2c290");
