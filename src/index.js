document.addEventListener("DOMContentLoaded", () => {
 const task = document.getElementById("create-task-form");
  task.addEventListener("submit", function(event) { 
    event.preventDefault();
    // console.log('welcome!')
    const description = document.getElementById("new-task-description");
    let li = document.createElement("li");
    li.innerHTML = description.value;
    document.getElementById("tasks").appendChild(li);
});
});

