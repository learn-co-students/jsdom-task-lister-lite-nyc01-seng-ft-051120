document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", function(event){
  // callback
    event.preventDefault();
    const task = taskForm.getElementsByTagName('input')[0].value
    // taskForm.getElementsByTagName('input')[0].value = ''
    const list = document.getElementById('tasks')
    const item = document.createElement('li')
    item.innerText = task
    list.appendChild(item)
    // console.log(task)
    event.target.reset()
  })
});




