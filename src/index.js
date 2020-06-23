document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDesc = document.getElementById("new-task-description");

  const newTaskUl = document.getElementById("tasks");

  createTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault()

  const newTaskDesc = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  
  newTask.innerText = newTaskDesc.value;

  appendNewTask(newTask);
  event.target.reset()

}

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
}

const deleteTasks = document.querySelector('li');
deleteTasks.remove()


