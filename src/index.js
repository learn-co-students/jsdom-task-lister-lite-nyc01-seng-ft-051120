document.addEventListener("DOMContentLoaded", () => {

  // variable for text field
  const taskDescription = document.querySelector("input#new-task-description")
  // variable for form
 
  // task list
  // 
  function createTaskLi(input){
    const taskLi = document.createElement('li');
    taskLi.className = "task";
    taskLi.innerHTML = input;
    return taskLi;
  }

  function addTaskLi(taskLi){
    const taskUl = document.querySelector("ul#tasks");
    taskUl.append(taskLi)
  }
  let form = document.querySelector("form")
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const taskDescription = document.querySelector("input#new-task-description")
    const input = taskDescription.value;
    if (input !== '') {
      const li = createTaskLi(input)
      addTaskLi(li);
      form = document.querySelector("form").reset();
    }
    
  })
})

