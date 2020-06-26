document.addEventListener("DOMContentLoaded", () => {
  // your code here
  

  
  let v =document.getElementsByTagName('input')
  v[1].addEventListener('click', function(e){
    e.preventDefault();
    console.log(e)
    let input = document.getElementById('new-task-description')
    let task = document.createElement('li')
    task.innerText = input.value
    let taskContainer = document.querySelector('#tasks')
    
    
    taskContainer.append(task)

    

  })


});
