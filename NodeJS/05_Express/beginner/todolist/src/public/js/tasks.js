document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList");
  const addTaskForm = document.getElementById("addTaskForm");
  const taskTitleInput = document.getElementById("taskTitle");
  const taskDescriptionInput = document.getElementById("taskDescription");

  // Function to fetch and display tasks
  async function displayTasks() {
    // Fetch tasks from your server using fetch() or other methods
    const response = await fetch("/api/tasks");
    const tasks = await response.json();

    // Clear existing task list
    taskList.innerHTML = "";

    // Display tasks
    tasks.forEach((task) => {
      const li = document.createElement("li");

      // Create a div to hold the task title and status
      const taskDiv = document.createElement("div");

      // Display the task title and description
      const titleSpan = document.createElement("span");
      titleSpan.textContent = `Title: ${task.title}`;
      taskDiv.appendChild(titleSpan);

      const descriptionSpan = document.createElement("span");
      descriptionSpan.textContent = `Description: ${task.description}`;
      taskDiv.appendChild(descriptionSpan);

      // Display the task status
      const statusSpan = document.createElement("span");
      statusSpan.textContent = task.status ? "Completed" : "Incomplete";
      statusSpan.className = task.status ? "completed" : "incomplete";
      taskDiv.appendChild(statusSpan);

      li.appendChild(taskDiv);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", async () => {
        // Delete Task Logic
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }

  // Add event listener to the form for adding tasks
  addTaskForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newTaskTitle = taskTitleInput.value.trim();
    const newTaskDescription = taskDescriptionInput.value.trim();
    console.log(newTaskTitle);
    if (newTaskTitle) {
      taskTitleInput.value = ""; // Clear the input fields
      taskDescriptionInput.value = "";

      // Add Task logic
      displayTasks();
    }
  });

  // Initial task list display
  displayTasks();
});
