const board = document.querySelector('#board');
const colors = ['#006262', '#20B2AA', '#C8A2C8', '#6CA0DC', '#B86D29', '#C9FFE5', '#FF80C0' ]
const SQUARES_NUMBER = 720;


for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRendomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRendomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
