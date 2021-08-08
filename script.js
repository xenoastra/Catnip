var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function play(sound){
  var s = document.getElementById(sound);
  s.play();
}

function stop(sound){
  var s = document.getElementById(sound);
  s.onpause();
  s.currentTime=0;
}

function MemeArray(){
  var imgArray = new Array();
  imgArray[0] = 'meme pics/bread cat.jpg';
  imgArray[1] = 'meme pics/cat lick.jpg';
  imgArray[2]= 'meme pics/cat teeth.jpg';
  imgArray[3] = 'meme pics/cat yawn.jpg';
  imgArray[4] = 'meme pics/funny atto.jpg';
  imgArray[5] = 'meme pics/glasses cat.jpg';
  imgArray[6] = 'meme pics/grumpy cat.jpg';
  imgArray[7] = 'meme pics/hmm cat.png';
  imgArray[8] = 'meme pics/loaf cat.jpg';
  imgArray[9] = 'meme pics/standing cat.jpg';


  var rnd = Math.floor(Math.random()*imgArray.length);
  return document.getElementById("randomImg").innerHTML = '<img src="' + imgArray[rnd] +  '" width="700" height=700"/>';

}


//drawing pad script
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 

function getColor(colour){ctx.strokeStyle = colour;}

function getSize(size){ctx.lineWidth = size;}
  

// The event handler for any changes made to the tool selector

 var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 600;
canvas.height = 550;
// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  var color = document.getElementById("hex").value;

  ctx.beginPath(); // begin the drawing path

  // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

