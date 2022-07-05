const addBtn = document.querySelector('.btn-enter');
const todoInputEl = document.querySelector('.todo-input');
const oneContainer = document.querySelector('.lists');
const task = JSON.parse(localStorage.getItem('task')) || [];

const renderTasks = () => {
  oneContainer.innerHTML = '';
  task.forEach((element) => {
    const oneContainer = document.querySelector('.lists');
    const chore = document.createElement('div');
    chore.classList.add('list-info');
    chore.innerHTML = ` <div class="check">
              <input type="checkbox">
              <h2>${element.description}</h2>
              </div>
              <div class="icon">
              <i class="fa-solid fa-trash-can"id ="${element.index}"></i>
              </div>
                `;
    oneContainer.appendChild(chore);
  });
};
renderTasks();

addBtn.addEventListener('click', (e) => {
  const input = todoInputEl.value;
  e.preventDefault();
  todoInputEl.value = '';
  if (!input) return;
  const obj = {
    description: input,
    completed: false,
    index: task.length,
  };
  task.push(obj);
  localStorage.setItem('task', JSON.stringify(task));
  renderTasks();
});

const removeTask = (index) => {
  const newArr = task.filter((element) => element.index !== index);
  task.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  task.push(...newArr);
  localStorage.setItem('task', JSON.stringify(task));
  renderTasks();
};

oneContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});
