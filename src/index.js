
document.addEventListener("DOMContentLoaded", () => {

  function createLi(userInput) {
    let newTask = document.createElement("li")
    newTask.className = "task"
    newTask.innerHTML = userInput
    return newTask
  }

  function renderLi(taskLi) {
    const inputTasks = document.getElementById("tasks")
    inputTasks.append(taskLi)
  }

  const addTasks = document.querySelector("#create-task-form")[1]
  addTasks.addEventListener("click", function(e) {
    const inputText = document.getElementById("new-task-description").value
    const taskLi = createLi(inputText)
    renderLi(taskLi)
    e.preventDefault();
  });
});

