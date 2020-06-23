document.addEventListener("DOMContentLoaded", function() {
  
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  
  console.log(newTaskForm, newTaskDescription)


  const taskUl = document.getElementById("tasks")
  console.log(taskUl)
  
  newTaskForm.addEventListener("submit", createNewTask)


});

const createNewTask = function(event){
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li")
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = function(task){
  document.getElementById("tasks").appendChild(task);
  console.log(appendNewTask)
  
}

