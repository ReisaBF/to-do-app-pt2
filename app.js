function onReady() {
  let toDos = [];
  const ADD_TODO_FORM = document.getElementById('addToDoForm');

function renderTheUI(){
  const TODO_List = document.getElementById('toDoList');
  TODO_List.tectContent = '';

   toDos.forEach(function(toDo){
    const NEW_LI = document.createElement('li');
    const CHECKBOX = document.createElement('input');
    CHECKBOX.type = "checkbox";

    NEW_LI.textContent = toDo.title;

    TODO_List.appendChild(NEW_LI);
    NEW_LI.appendChild(CHECKBOX);
 })

}

function createNewToDo(){
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if(!NEW_TODO_TEXT.value){ return; }
    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false
    });

    NEW_TODO_TEXT.value = ''{
    renderTheUI();
    };
  }

ADD_TODO_FORM.addEventListener('submit', event {
    event.preventDefault();
    createNewToDo();
  });

renderTheUI();
}

window.onload = function() {
  onReady();
};
