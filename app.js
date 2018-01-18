
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

    toDos.forEach(function(toDos){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      newLi.textContent = toDos.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      deleteToDoForm.appendChild(newLi);

      const title = document.createElement('span');
      title.textContent = toDos.title;
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

  deleteToDoForm.addEventListener('submit', event  => {
    event.preventDefault();
    deleteToDo();

    renderTheUI();
  });
    renderTheUI();
}
//
window.onload = function() {
    onReady();
};
