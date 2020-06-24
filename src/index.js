document.addEventListener("DOMContentLoaded", () => {
const task = document.getElementById("create-task-form");
const select=document.querySelector('.priorities')
const selectElement = document.querySelector('.ice-cream');
let lin=''
function create(){
  task.addEventListener("submit", function(event) { 
    event.preventDefault();
    // console.log('welcome!')
    const description = document.getElementById("new-task-description");
    let li = document.createElement("li");
    console.log(lin)
    switch(lin){
      
      case 'high': li.style.color='red';
      console.log('in high!!')
      break;
      case 'medium': li.style.color='orange';
      break;
      case 'low': li.style.color='green'
      break;
      default:
      break;
    }

    li.innerHTML = `${description.value} <button id='delete'>X</button>` ;
    document.getElementById("tasks").appendChild(li);

   

});

}


function highLight(){
  
  select.addEventListener('change', function(event){
    console.log('in highlight!!')
    console.log(event.target.value)
    return event.target.value
});
}
lin=highLight();
create();


});


