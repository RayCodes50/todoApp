const todoControl = (() => {
  let todoList = [];
  //returns todo ?? at certain point later ID ??
  function storeTodo() {
    localStorage.setItem("todo", JSON.stringify(todoList));
    console.log("stored:", JSON.parse(localStorage.getItem("todo")));
  }
  function loadTodo() {
    const storage = JSON.parse(localStorage.getItem("todo"));
    todoList = storage || [];
  }
  // get single item lookup
  function readTodo(para) {
    return todoList[para];
  }
  function getTodos() {
    return [...todoList];
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
    storeTodo();
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
      highlighted,
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
      highlighted,
    };
  }
  //pushes todo to the array
  function addTodo(obj) {
    todoList.push(obj);
    storeTodo();
  }
  // delete function needs updating later
  function deleteTodo(id) {
    console.log("Function start");
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === id) {
        console.log(i);
        todoList.splice(i, 1);
        // localStorage.setItem("todo", JSON.stringify(todoList));
        storeTodo();
        console.log(todoList);
        return true;
      }
    }
    console.log(`Todo with id ${id} not found`);
    return false;
  }

  return {
    readTodo,
    changeTodo,
    createTodo,
    addTodo,
    deleteTodo,
    storeTodo,
    loadTodo,
    getTodos,
  };
})();
export { todoControl };
