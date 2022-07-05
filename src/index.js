// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const todo = [
  {
    description: 'clean my room',
    completed: false,
    index: 1,
  },
  {
    description: 'check my emails',
    completed: true,
    index: 2,
  },
  {
    description: 'read my book',
    completed: false,
    index: 3,
  },
  {
    description: 'working on my coding skills',
    completed: false,
    index: 4,
  },
];

todo.forEach((element) => {
  const oneContainer = document.querySelector('.lists');
  const chore = document.createElement('div');
  chore.classList.add('list-info');
  chore.innerHTML = ` <div class="check">
    <input type="checkbox">
    <h2>${element.description}</h2>
    </div>
    <div class="icon">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
      `;
  oneContainer.appendChild(chore);
});
