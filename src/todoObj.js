const todo = [];
const todoControl = (() => {
  const todoList = todo;
  //returns todo ?? at certain point later ID ??
  function readTodo(para) {
    console.log(todoList[para]);
  }
  //changes the list
  function changeTodo(para, options = {}) {
    const todoChange = todoList[para];
    if (options.title !== undefined) todoChange.title = options.title;
    if (options.description !== undefined)
      todoChange.description = options.description;
    if (options.priority !== undefined) todoChange.priority = options.priority;
    if (options.completed !== undefined)
      todoChange.completed = options.completed;
    if (options.dueDate !== undefined) todoChange.dueDate = options.dueDate;
    if (options.notes !== undefined) todoChange.notes = options.notes;
    if (options.checklist !== undefined)
      todoChange.checklist = options.checklist;
  }

  // creates todo from input
  function createTodo(title, priority, dueDate, options = {}) {
    const id = crypto.randomUUID();
    const {
      completed = false,
      description = "",
      notes = "",
      checklist = "Placeholder",
      tags = [],
    } = options;
    return {
      title,
      priority,
      dueDate,
      id,
      completed,
      description,
      notes,
      checklist,
      tags,
    };
  }
  //pushes todo to the array
  function addTodo(obj) {
    todo.push(obj);
  }
  // delete function needs updating later
  function deleteTodo(num) {
    console.log("Function start");
    const idToDelete = todoList[1].id;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id == idToDelete) {
        console.log(i);
        console.log(todoList[i]);
      }
    }
  }

  return { readTodo, changeTodo, createTodo, addTodo, deleteTodo };
})();
export { todoControl };
