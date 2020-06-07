function onReady(){
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;
  console.log("hello");

  function renderTheUI(){
    const TODO_List = document.getElementById('toDoList');
    TODO_List.textContent = '';

  toDos.forEach(function(toDo){
    let NEW_LI = document.createElement('li');
    NEW_LI.setAttribute("id", toDo.id)
    const CHECKBOX = document.createElement('input');
    CHECKBOX.type = "checkbox";

    let DELETE_BTN = document.createElement('button');
    DELETE_BTN.setAttribute("id", toDo.id)
    DELETE_BTN.textContent = "Delete!";

    DELETE_BTN.addEventListener('click', () => {deleteClickHandler(event)} )
      // toDos = toDos.filter(function(item){
      //   return item.id !== toDo.id;


    NEW_LI.textContent = toDo.title;

    TODO_List.appendChild(NEW_LI);
    NEW_LI.appendChild(CHECKBOX);
    NEW_LI.appendChild(DELETE_BTN);
 })
document.getElementById("newToDoText").value = "";
}

function deleteClickHandler(event){
  toDos.forEach(function(toDo, index){
    //compare the button's id to the toDos id
    if (Number(event.target.id) === toDo.id){
      console.log(event.target.id);
      console.log(toDo.id);
     toDos.splice(index, 1);
     renderTheUI();
     return;
    }
  })
}

 function createNewToDo(){
    let NEW_TODO_TEXT = document.getElementById('newToDoText').value;
    if(!NEW_TODO_TEXT){ return; }
    toDos.push({
      title: NEW_TODO_TEXT,
      complete: false,
      id: id
    });

    id++;

    console.log(toDos);

    NEW_TODO_TEXT = ''
    renderTheUI();
  }

ADD_TODO_FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
    console.log(toDos);
  });

renderTheUI();
}
window.onload = function() {
  onReady();
};
