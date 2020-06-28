document.addEventListener("DOMContentLoaded", () => {
  
  const button = document.querySelector('form')[1]

  button.addEventListener("submit", function(event) {
      event.preventDefault();
      // ^ensures callback action is executed w/o refreshing page 

      const userInput = document.getElementById('new-task-description').value;

      const tasks = document.getElementById('tasks')

      const newTask = document.createElement('li')
      newTask.innerText = userInput 
      tasks.appendChild(newTask)  

      event.target.reset() 

      });
});


//          


  // function createLi(text) {
  //   let newTask = document.createElement('li')
  //   newTask.className = 'task'
  //   newTask.innerHTML = text 
  //   return newTask
  //   }

  // function appendUl(x) {
  //   tasks.append(x) 
  // }
