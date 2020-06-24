document.addEventListener("DOMContentLoaded", () => {
  const textField = document.getElementById('new-task-description')
  const list = document.getElementById('tasks')
  const taskForm = document.getElementById('create-task-form')

    taskForm.addEventListener('submit', function (e) {
      e.preventDefault()
      console.log(e.target)
        const tasklI = document.createElement('li')
        tasklI.innerHTML = textField.value
        list.append(tasklI)
      
    })
});

// document.addEventListener("DOMContentLoaded", () => {
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const newTaskUl = document.getElementById("tasks");

//   //attach event listeners
//   newTaskForm.addEventListener("submit", createNewTask);
// });

// const createNewTask = event => {
//   event.preventDefault();
//   //stop form from trying to submit
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };
