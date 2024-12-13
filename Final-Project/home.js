const titlebackground = document.getElementById("title");
const logbutton= document.getElementById("goright");
titlebackground.style.backgroundColor= "salmon";
titlebackground.style.minHeight = "90px";
logbutton.style.float = "right";
const fullbackground = document.getElementById("backgroundcolor");
fullbackground.style.backgroundColor ="lightgreen";

document.getElementById("welUse").innerHTML= "Welcome, "+localStorage.username;
let taskIdCounter = 0;

function logout(){
    localStorage.removeItem(username)
}

// Task constructor function
function Task(taskName, category) {
  this.id = taskIdCounter++;
  this.name = taskName;
  this.category = category;
  this.completed = false;
}

// Function to create a new task
function createTask() {
  // Prompt for task name and category
  let taskName = prompt("Enter the task name:");
  if (!taskName) return; // If no name is entered, return early

  let category = prompt("Enter category (chore, work, school, event, other):");
  if (!category || !["chore", "work", "school", "event", "other"].includes(category.toLowerCase())) {
    alert("Invalid category! Please choose from chore, work, school, event, or other.");
    return;
  }

  // Create a new task object
  let newTask = new Task(taskName, category);

  // Display the task in the task list
  displayTask(newTask);
}

// Function to display a task in the task list
function displayTask(task) {
  const taskList = document.getElementById('taskList');

  // Create task element
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-container');
  taskDiv.setAttribute('data-id', task.id); // Add data-id to task container for easy reference

  taskDiv.innerHTML = `
    <div class="task">
      <input type="text" value="${task.name}" disabled />
      <select>
        <option value="chore" ${task.category === 'chore' ? 'selected' : ''}>Chore</option>
        <option value="work" ${task.category === 'work' ? 'selected' : ''}>Work</option>
        <option value="school" ${task.category === 'school' ? 'selected' : ''}>School</option>
        <option value="event" ${task.category === 'event' ? 'selected' : ''}>Event</option>
        <option value="other" ${task.category === 'other' ? 'selected' : ''}>Other</option>
      </select>
      <button onclick="changeTaskName(${task.id})">Change Task</button>
      <span class="checkbox" onclick="toggleCompletion(${task.id})">
        ${task.completed ? '✔️' : '⬜'}
      </span>
      <button onclick="deleteTask(${task.id})">Delete</button>
    </div>
  `;

  taskList.appendChild(taskDiv);

  // Store the task in a global object for future reference
  taskStore[task.id] = task;
}

// Function to change the task name
function changeTaskName(taskId) {
  let newTaskName = prompt("Enter the new task name:");
  if (newTaskName) {
    taskStore[taskId].name = newTaskName;
    // Update the input field for the task
    const taskInput = document.querySelector(`#taskList div[data-id="${taskId}"] input[type="text"]`);
    taskInput.value = newTaskName;
  }
}

// Function to toggle task completion (checkmark/empty box)
function toggleCompletion(taskId) {
  let task = taskStore[taskId];
  task.completed = !task.completed;
  // Update the checkbox symbol
  const checkbox = document.querySelector(`#taskList div[data-id="${taskId}"] .checkbox`);
  checkbox.innerText = task.completed ? '✔️' : '⬜';
}

// Function to delete a task
function deleteTask(taskId) {
  if (confirm("Are you sure you want to delete this task?")) {
    // Remove task from the DOM
    const taskDiv = document.querySelector(`#taskList div[data-id="${taskId}"]`);
    taskDiv.remove();
    // Remove task from the task store
    delete taskStore[taskId];
  }
}

// Function to change the task category when the select dropdown is changed
function changeCategory(taskId, newCategory) {
  if (!["chore", "work", "school", "event", "other"].includes(newCategory.toLowerCase())) {
    alert("Invalid category! Please choose from chore, work, school, event, or other.");
    return;
  }
  let task = taskStore[taskId];
  task.category = newCategory;
}

// Store all tasks globally
let taskStore = {};

// Event listener to detect category changes
document.addEventListener('change', function(event) {
  if (event.target.tagName === 'SELECT') {
    const taskId = event.target.closest('.task-container').getAttribute('data-id');
    const newCategory = event.target.value;
    changeCategory(taskId, newCategory);
  }
});