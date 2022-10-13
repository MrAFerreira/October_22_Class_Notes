/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// SetTimeout
// SetInterval
// requestAnimationFrame - call a callback function before the next screen paint (around 60fps)

const color = {
  red: Math.floor(Math.random() * 255),
  green: Math.floor(Math.random() * 255),
  blue: Math.floor(Math.random() * 255),
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  },
};

/* function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color.rgb();
  ctx.fillRect(100, 100, 300, 300);

  color.red = (color.red + 1) % 255;
  color.green = (color.green + 1) % 255;
  color.blue = (color.blue + 1) % 255;

  requestAnimationFrame(updateCanvas);
}

updateCanvas(); */

// Movement

let speed1 = 0; //1200
let speed2 = canvas.height; //800
let speed3 = canvas.height; //800

function drawSquare(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function moveSquares() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSquare((speed1 % canvas.width) + 1200, 50, 100, 100, 'red');
  drawSquare(0, speed2, 100, 100, 'green');
  drawSquare(speed3, speed3, 100, 100, 'yellow');

  speed1 -= 20;
  speed2 -= 2;
  speed3 -= 3;

  requestAnimationFrame(moveSquares);
}

// moveSquares();

//red right to left ←
//green bottom to top ↑
//yellow bottom to top and right to left (diagonal) ↖

class Pokemon {
  constructor() {
    //Starting position of the character
    this.x = 25;
    this.y = 25;
    //create and load the image
    const img = new Image();
    img.addEventListener('load', () => {
      //this will attach the img to the this.img of the class
      this.img = img;
      this.draw();
    });
    //src of the image
    img.src = '/images/char-r.png';
  }

  moveUp() {
    this.y -= 25;
    this.img.src = '/images/char-u.png';
  }

  moveDown() {
    this.y += 25;
    this.img.src = '/images/char-d.png';
  }

  moveLeft() {
    this.x -= 25;
    this.img.src = '/images/char-l.png';
  }

  moveRight() {
    this.x += 25;
    this.img.src = '/images/char-r.png';
  }

  reset() {
    this.x = 25;
    this.y = 25;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }
}

//instantiate an object based on the class
const charmander = new Pokemon();

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      charmander.moveUp();
      break;
    case 'ArrowDown':
      charmander.moveDown();
      break;
    case 'ArrowLeft':
      charmander.moveLeft();
      break;
    case 'ArrowRight':
      charmander.moveRight();
      break;
    case 'Space':
      charmander.reset();
      break;
  }
  drawCanvas();
});

ctx.font = '18px monospace';

const drawCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText('Charmander x:' + charmander.x, 1000, 50);
  ctx.fillText('Charmander y:' + charmander.y, 1000, 150);

  charmander.draw();
};
