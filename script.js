//drawing pad script
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 

  function getColor(colour){ctx.strokeStyle = colour;}

function getSize(size){ctx.lineWidth = size;}

// canvas

 var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 600;
canvas.height = 550;
// resize
function resize() {
 ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
var pos = { x: 0, y: 0 };

// mouse
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; // stop when mouse is not clicked

  var color = document.getElementById("hex").value;

  ctx.beginPath(); // drawing path

  // width of line
  ctx.lineCap = "round"; 
  ctx.strokeStyle = color; // hex color 

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); //stroke
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);