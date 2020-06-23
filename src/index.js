document.addEventListener("DOMContentLoaded", () => {
  //get node
 const newTaskForm = document.getElementById("create-task-form");
 const tasks = document.getElementById("tasks");


 //append task
 const appendNewTask = task => {
   //create new task delete button
   const delete_button = document.createElement("button");
   delete_button.innerHTML = "x";
   delete_button.addEventListener("click", function(){
    delete_button.parentNode.parentNode.removeChild(task)

  });

   tasks.appendChild(task).appendChild(delete_button);

 };

//create new task
 const createNewTask = event => {
   //stop default behavior
  event.preventDefault();

  //get node
  const newTaskDescription = document.getElementById("new-task-description");

  //create element and set its value
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

 //append newly created elements
  appendNewTask(newTask);

  event.target.reset();
 };

 newTaskForm.[]'
 \']("submit", createNewTask);

});
