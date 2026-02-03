function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {

const body = document.querySelector('body');
const color  = getRandomHexColor();
body.style.backgroundColor = color;
document.querySelector('.color').textContent = color;
}

document.querySelector('.change-color').onclick = changeBackgroundColor;
