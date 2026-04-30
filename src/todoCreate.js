function createTodo(item, onDelete) {
  console.log(item);
  const card = document.createElement("li");
  card.classList.add("todo_item");
  card.innerHTML = `
  <header class="todo_item_head">
      <svg
        class="icon drag_handle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"
        />
      </svg>
      <input
        class="checkbox"
        type="checkbox"
        name=""
        
      />
      <div class="todo_info">
        <p class="todo_title"  contenteditable="true">
          ${item.title}
        </p>
        <p class="todo_tags"  data-color="blue">${item.tags}</p>
      </div>
      <div class="todo_dueDate">${item.dueDate}</div>

      <svg
        class="icon star"
        
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
        />
      </svg>
    </header>
    <section class="todo_item_body">
      <div class="todo_item_body_wrap">
        <p
          class="section_des"
         
          contenteditable="true"
        >
          ${item.description}
        </p>
        <select class="todo_priority" >
          <option value="5">Highest</option>
          <option value="4">High</option>
          <option value="3">Moderate</option>
          <option value="2">Low</option>
          <option value="1">Very Low</option>
        </select>
      </div>
      <p class="todo_notes"  contenteditable="true">
        ${item.notes}
      </p>
      <button data-id="${item.id}"  class='btn_delete'>Delete</button>
    </section>
    `;
  const prioritySelect = card.querySelector(".todo_priority");
  prioritySelect.value = item.priority;
  const btnDelete = card.querySelector(".btn_delete");
  btnDelete.addEventListener("click", (e) => {
    console.log(`onDelete initiated ${item.id}`);
    onDelete(item.id);
  });
  return card;
}

export { createTodo };

// card.innerHTML = `
//   <header class="todo_item_head">
//       <svg
//         class="icon drag_handle"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         <path
//           d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"
//         />
//       </svg>
//       <input
//         class="checkbox"
//         type="checkbox"
//         name=""
//         id="completed"
//       />
//       <div class="todo_info">
//         <p class="todo_title" id="title" contenteditable="true">
//           ${item.title}
//         </p>
//         <p class="todo_tags" id="tags" data-color="blue">${item.tags}</p>
//       </div>
//       <div class="todo_dueDate" id="dueDate">${item.dueDate}</div>

//       <svg
//         class="icon star"
//         id="highlighted"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         <path
//           d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
//         />
//       </svg>
//     </header>
//     <section class="todo_item_body">
//       <div class="todo_item_body_wrap">
//         <p
//           class="section_des"
//           id="description"
//           contenteditable="true"
//         >
//           ${item.description}
//         </p>
//         <select class="todo_priority" id="priority">
//           <option value="5">Highest</option>
//           <option value="4">High</option>
//           <option value="3">Moderate</option>
//           <option value="2">Low</option>
//           <option value="1">Very Low</option>
//         </select>
//       </div>
//       <p class="todo_notes" id="notes" contenteditable="true">
//         ${item.notes}
//       </p>
//       <button data-id="${item.id}" id="btnDelete" class='btn_delete'>Delete</button>
//     </section>
//     `;
// return card;
