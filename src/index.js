document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form')
  console.log(taskForm)
  taskForm.addEventListener('submit', function(e){
    const taskInput = document.getElementById('new-task-description')
    const task = taskInput.value
    console.log(task)
    const newLi = document.createElement('li')
    newLi.textContent = task
    const tasksUl = document.getElementById('tasks')
    tasksUl.append(newLi)
    e.preventDefault()
  })
});
