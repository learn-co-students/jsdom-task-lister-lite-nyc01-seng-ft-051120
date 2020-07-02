document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  const submitBtn = taskForm.children[2]
  console.log(submitBtn)
 
  submitBtn.addEventListener("click", function(e){  // why isn't this a submit??
      e.preventDefault()

      const taskList = document.querySelector("#tasks")
      const taskItem = document.createElement("li")
      taskItem.textContent = taskForm.children[1].value
      taskList.append(taskItem)
      taskForm.reset()
  })

})



//As a user, I should be able to type a task into the input field.
/* isolate the form element - when user inputs information and hits submit, 
create an element for task item under the ul 
 - define a const for the task form
 - dfine a const for submit button
 -add event listener to submit button
 -when button is submitted prevent default 

 -create li for ul
 -add new task to li and append to ul 
*/
