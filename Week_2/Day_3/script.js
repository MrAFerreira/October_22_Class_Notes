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

circle();

//create an html file with a canvas with width 900 and height 450
//Create a script.js file with the following :
/** @type {HTMLCanvasElement} */
//const canvas = document.getElementById('canvas');
//const ctx = canvas.getContext('2d');
//Remember to link js to html unlike your teacher
