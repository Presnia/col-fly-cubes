const colors = [
  '#8A2BE2',
  '#7FFF00',
  '#00BFFF',
  '#FF00FF',
  '#FF6347',
  '#DC143C',
  '#FFFF00'
]

function createSquare() {
  const section = document.querySelector('section');
  const square = document.createElement('span');

  let size = Math.random() * 50;

  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';

  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';

  const bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.background = bg;

  section.appendChild(square);

  setTimeout(() => {
    square.remove()
  }, 5000)

};

setInterval(createSquare, 150);