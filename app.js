
function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const addToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';
    id++;

    renderTheUI();
  }
//
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    const deleteToDoForm = document.getElementById('deleteToDoForm');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      checkbox.type = 'checkbox';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      const title = document.createElement('span');
      title.textContent = toDo.title;
    });

    function deleteToDo(id) {
      toDos = toDos.filter(item => item.id !== id);
    }
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  deleteButton.addEventListener('click') => {
    deleteToDo();
  }
    renderTheUI();
}
//
window.onload = function() {
    onReady();
};
