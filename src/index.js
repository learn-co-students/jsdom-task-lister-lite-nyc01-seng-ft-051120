class Task {
  constructor(text) {
    this.element = document.createElement("li");
    this.element.innerText = text;
  }
}
class TaskList {
  constructor() {
    this.tasks = [];
  }
  
  addTask(task) {
    this.tasks.push(task);
  }

  render() {
    let taskListElement = document.getElementById("tasks");
    this.tasks.forEach(function(task) {
      taskListElement.append(task.element);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let taskList = new TaskList();
  let submitButton = document.getElementById("submit-button");
  let inputElement = document.getElementById("new-task-description");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let text = inputElement.value;
    inputElement.value = "";
    taskList.addTask(new Task(text));
    taskList.render();
  });
});
