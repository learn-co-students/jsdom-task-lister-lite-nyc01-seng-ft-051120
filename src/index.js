let id = 0;
class Task {
  constructor(text) {
    this.element = document.createElement("li");
    this.element.innerText = text;
    this.element.id = `task-${id}`;
    id += 1;
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

let taskList = new TaskList();
let task = new Task("hello rould");
taskList.addTask(task)

document.addEventListener("DOMContentLoaded", () => {
  let taskList = new TaskList();
  let submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let inputElement = document.getElementById("new-task-description");
    let text = inputElement.value;
    taskList.addTask(new Task(text));
    taskList.render();
  });
});
