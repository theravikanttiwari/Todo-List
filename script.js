// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a task");
      return;
    }
  
    // Create new list item
    const li = document.createElement("li");
    const taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);
  
    // Add 'Completed' button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Completed";
    completeBtn.classList.add("completed");
    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    li.appendChild(completeBtn);
  
    // Add 'Delete' button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(deleteBtn);
  
    // Add the new task to the list
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = "";
  }
  