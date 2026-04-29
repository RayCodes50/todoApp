function createMainHeaderTemplate() {
  return `
    
          <header class="extra_flex">
            <button class="extra_menu">
              <svg
                class="icon icon_menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
            </button>
            <button class="extra_menu push_right">
              <svg
                class="icon icon_menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </button>
            <button class="extra_menu">
              <svg
                class="icon icon_menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 17V11.8C18.5 11.9 18 12 17.5 12H17V18H7V11C7 8.2 9.2 6 12 6C12.1 4.7 12.7 3.6 13.5 2.7C13.2 2.3 12.6 2 12 2C10.9 2 10 2.9 10 4V4.3C7 5.2 5 7.9 5 11V17L3 19V20H21V19L19 17M10 21C10 22.1 10.9 23 12 23S14 22.1 14 21H10M21 6.5C21 8.4 19.4 10 17.5 10S14 8.4 14 6.5 15.6 3 17.5 3 21 4.6 21 6.5"
                />
              </svg>
            </button>

            <button class="extra_menu">
              <svg
                class="icon icon_menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"
                />
              </svg>
            </button>
          </header>
        </nav>
        <section class="section_wrap">
          <header class="h1_wrap">
            <h1>Good morning, <span class="h1_user_name">John!</span></h1>
            <p class="h1_nr_tasks">
              You have <span class="h1_nr_span">3 tasks</span> today.
            </p>
          </header>
            <button type="submit" class='add_task'>Add Task</button>

            <!-- new modal form -->
          <dialog id="todoDialog">
      <form method="dialog" class="todo_dialog_form">
        <h2>Descrive your task</h2>
        <main>
          <div class="field_wrap">
            <label for="title">Name the task:</label>
            <input type="text" name="title" id="title" required/>
          </div>
          <div class="field_wrap">
            <label for="description">Description:</label>
            <input type="text" name="description" id="description" />
          </div>
          <div class="field_wrap">
            <label for="tags">Tags:</label>
            <input type="text" name="tags" id="tags" />
          </div>
          <div class="field_wrap">
            <label for="priority">Priority:</label>
            <select class="todo_priority" id="priority" name="priority">
              <option value="5">Highest</option>
              <option value="4">High</option>
              <option value="3">Moderate</option>
              <option value="2">Low</option>
              <option value="1">Very Low</option>
            </select>
          </div>
          <div class="field_wrap">
            <label for="dueDate">When due:</label>
            <input type="date" name="dueDate" id="dueDate" required/>
          </div>
          <div class="field_wrap">
            <label for="notes">Notes:</label>
            <input type="text" name="notes" id="notes" />
          </div>
        </main>
        <button value="save" id='save'>Save</button>
        <button value="cancel">Close</button>
      </form>
    </dialog>
          <nav class="todo_filter">
            <ul class="todo_f_wrap">
              <li><button class="todo_f_section active">All</button></li>
              <li><button class="todo_f_section">Active</button></li>
              <li><button class="todo_f_section">Completed</button></li>
            </ul>
            <div class="todo_f_sort">
              <label for="sort">Sort by:</label>
              <select name="sort" id="sort">
                <option value="due-asc">Due date</option>
                <option value="due-desc">Date</option>
              </select>
            </div>
          `;
}

export { createMainHeaderTemplate };
