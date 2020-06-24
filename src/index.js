document.addEventListener("DOMContentLoaded", () => {

  function createLi(text) {
    let task = document.createElement("li")
    task.className = "task"
    task.innerHTML = text
    return task
  }

  function renderLi(anyTask) {
    const tasks = document.getElementById("tasks")
    tasks.append(anyTask)
  }

  const button = document.querySelector("form")[1]
  button.addEventListener("click", function(e) {
    e.preventDefault();
    const inputText = document.getElementById("new-task-description").value
    const taskLi = createLi(inputText)
    renderLi(taskLi)
  });

  // const form = document.getElementById("create-task-form")
  // form.addEventListener("submit", function(e) {
  //   e.preventDefault();
  //   const inputText = document.getElementById("new-task-description").value
  //   const taskLi = createLi(inputText)
  //   renderLi(taskLi)
  // });



});
