document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let button = document.getElementById('button');
  button.addEventListener('click', function(e){
    e.preventDefault()
    let task = document.getElementById('new-task-description').value
    const ul = document.getElementById("tasks");
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    let form = document.getElementById('create-task-form').reset();
    })
  
});



