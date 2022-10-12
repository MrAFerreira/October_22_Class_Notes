/** @type {HTMLCanvasElement} */

//Canvas

const canvas = document.getElementById('canvas');

//context - 2d or 3d

const ctx = canvas.getContext('2d');
//2d ctx allows us to draw 2d images

//Rectangles

//FillRect

ctx.fillStyle = 'purple';

function drawRectangles() {
  //fills a rectangle
  ctx.fillRect(260, 260, 300, 300);

  //clearRect - erases a portion of the canvas
  ctx.clearRect(280, 280, 50, 50);

  //strokeRect
  ctx.strokeRect(100, 100, 150, 150);
}

//drawRectangles();

//Paths
//begin path
//"move the pen"
// stroke or fill
//Stroke to create lines
//Fill to create shapes
//close the path

function drawPath() {
  //open the path
  ctx.beginPath();

  //we indicate where we want to start
  ctx.moveTo(300, 250);

  ctx.lineTo(600, 250);
  ctx.stroke();

  ctx.lineTo(600, 500);
  ctx.stroke();

  ctx.lineTo(200, 350);
  ctx.stroke();

  ctx.closePath();
}

//drawPath();

function triangle() {
  ctx.beginPath();
  ctx.moveTo(500, 100);
  ctx.lineTo(300, 300);
  ctx.lineTo(700, 300);
  //ctx.lineTo(700, 500);
  //If we have 3 points and we use the fill method it will connect the first and last point and fill the shape
  ctx.fill();
  ctx.closePath();
}

//triangle();

//Arcs
// arc arcto

//arc(x, y, radius, startAngle, endAngle, antiClockwise)
//Radians
// radians = (Math.PI/180) * degrees

function circle() {
  ctx.strokeStyle = 'green';
  ctx.fillStyle = 'red';
  ctx.lineWidth = 20;

  ctx.beginPath();
  //draw a full circle
  ctx.arc(150, 170, 75, 0, Math.PI * 2, true);
  //stroke the circle
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(150, 170, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

//circle();

//create an html file with a canvas with width 900 and height 450, add an id="canvas"
//Create a script.js file with the following :
/** @type {HTMLCanvasElement} */
//const canvas = document.getElementById('canvas');
//const ctx = canvas.getContext('2d');
//Remember to link js to html unlike your teacher

//Main Field (green )
/* ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 900, 450);

//Styles
ctx.strokeStyle = 'white';
ctx.lineWidth = 20;

//outer rectangle
ctx.strokeRect(0, 0, 900, 450);

//area
ctx.strokeRect(0, 125, 100, 200);
ctx.strokeRect(800, 125, 100, 200);

//centerfield
ctx.beginPath();
ctx.arc(450, 225, 75, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

//smaller centerfield
ctx.beginPath();
ctx.arc(450, 225, 25, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();

//middlefield line
ctx.beginPath();
ctx.moveTo(450, 0);
ctx.lineTo(450, 450);
ctx.stroke();
ctx.closePath();

//half-circles
//left
ctx.beginPath();
ctx.arc(100, 225, 45, Math.PI / 2, (Math.PI * 3) / 2, 'clockwise');
ctx.stroke();
ctx.closePath();

//right
ctx.beginPath();
ctx.arc(800, 225, 45, Math.PI / 2, (Math.PI * 3) / 2);
ctx.stroke();
ctx.closePath(); */

//Color

//fillStyle - changes the color of the fill
//strokeStyle - changes the color of the stroke
//default black for both of them

/* 
color name
ctx.fillStyle = 'red';
hex
ctx.fillStyle = '#ff0000';
rgb
ctx.fillStyle = 'rgb(255, 0, 0)';

ctx.fillRect(100, 100, 300, 300);
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.fillRect(700, 300, 300, 300); */

ctx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
//lineWidth - controls the width of the line for the stroke

ctx.lineWidth = 20;

/* ctx.strokeRect(100, 100, 200, 200);
ctx.strokeRect(200, 200, 200, 200);
ctx.strokeRect(300, 300, 200, 200); */

//Text
ctx.fillStyle = 'black';
ctx.font = '48px monospace';

//fill
/* ctx.fillText('Hello world', 100, 100);

ctx.strokeStyle = 'yellow';
ctx.lineWidth = 1;
//stroke
ctx.strokeText('Hello world', 100, 300); */

//Images
//accepts any format html does

//creates the image object
const sprite = new Image();

//waits for the image to load
sprite.onload = function () {
  ctx.drawImage(sprite, 0, 0, 0, 0);
};

//specify the path to the image (or external url)
sprite.src = '/images/pikachu-sprite.png';

//drawImage

let pikachuX = 0;
let pikachuY = 0;

//This function is being called when we cloick the button on html
/* function drawPikachu() {
  //clear the whole canvas

  setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sprite, pikachuX, pikachuY, 100, 100);
    pikachuX += 3;
    pikachuY += 3;
  }, 1000 / 60);
} */

//Creating pattern

const tileImg = new Image();

tileImg.onload = function () {
  ctx.drawImage(tileImg, 0, 0);
};

tileImg.src = '/images/tile.jpg';

function drawPattern() {
  //this will create a pattern based on the image
  let tilePattern = ctx.createPattern(tileImg, 'repeat');
  //apply the pattern to the fillstyle (instead of a color)
  ctx.fillStyle = tilePattern;

  ctx.fillRect(0, 0, 400, 500);
}
