document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let inputValue = "";

  // keypress listener 
  let input = document.getElementById("new-task-description");
  input.addEventListener("keyup", function(event) {
    inputValue = event.target.value;
  });


  // submit listener
  let button = document.getElementById("submit-button");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    var idCounter = 0;
    let newTaskElement = document.createElement("li");
        newTaskElement.innerHTML = inputValue;
        newTaskElement.id = `task-${idCounter}`;
    let tasksElement = document.getElementById("tasks");    
    tasksElement.append(newTaskElement);
    idCounter += 1;
  });

  let listItem = document.getElementById("")

});
