document.addEventListener("DOMContentLoaded", () => {

  function createLi(text) {
    let task = document.createElement("li")
    task.className = "task"
    task.innerHTML = text
    return task
  }

  function renderLi(taskLi) {
    const tasks = document.getElementById("tasks")
    tasks.append(taskLi)
  }

  const button = document.querySelector("form")[1]
  button.addEventListener("click", function(e) {
    const inputText = document.getElementById("new-task-description").value
    const taskLi = createLi(inputText)
    renderLi(taskLi)
    e.preventDefault();
  }, false);
});
