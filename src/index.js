import './styles.css';
import goblinPic from './goblin.png';

const container = document.getElementById('game-container');

const size = 4;
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

for (let i = 0; i < size * size; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.index = i;
  grid.appendChild(cell);
}

const goblin = document.createElement('img');
goblin.src = goblinPic;
goblin.classList.add('goblin');

let prevIndex = null;

function moveGoblin() {
  const cells = document.querySelectorAll('.cell');
  let idx;
  do {
    idx = Math.floor(Math.random() * (size * size));
  } while (idx === prevIndex);

  cells[idx].appendChild(goblin);
  prevIndex = idx;
}

moveGoblin();
setInterval(moveGoblin, 1000);