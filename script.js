// Get DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add task to the list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

// Delete a task
function deleteTask(e) {
    if (e.target.classList.contains("delete-btn")) {
        const taskItem = e.target.parentElement;
        taskList.removeChild(taskItem);
    }
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
