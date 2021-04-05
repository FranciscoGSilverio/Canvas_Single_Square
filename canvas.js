//Saving the reference from Canvas element.
var canvas = document.querySelector("canvas");

//Definition of Canvas size.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//Width X Height coordinates.
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

//Element's speed.
var dx;
var dy;

//Elemetn colors.
var blue;
var red;
var green;

//Slider's parameters.
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
var speed = Number(slider.value);

//Updates the slider value on every input.
slider.oninput = function () {
  output.innerHTML = this.value;
  speed = Number(slider.value);
};

function animate() {
  requestAnimationFrame(animate);
  
  //Cleans the square in the Canvas.
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  //Draws a new square in the Canvas
  c.fillStyle = "rgba(" + red + "," + green + "," + blue + ",0.5)";
  c.fillRect(x, y, 200, 200);

  //Updates the square position.
  
  x = x + dx;
  y = y + dy;

  //Limits the square position to the Canvas size.
  if (x >= window.innerWidth - 200 || x <= 0) {
    colision(1);
  }
  if (y >= window.innerHeight - 200 || y <= 0) {
    colision(0);
  }
}
//The square comes back and changes its color after hitting the window limit.
function colision(back) {
  if (back == 1) {
    dx = -dx;
  } else if (back == 0) {
    dy = -dy;
  }
  //Generates a random color.
  red = Math.random() * 255;
  green = Math.random() * 255;
  blue = Math.random() * 255;
}

// Start/Stop animation button.
function moving() {
  if(document.getElementById("MoveButton").value == "START"){
    dx = speed;
    dy = speed;
    animate();
    document.getElementById("MoveButton").value="PAUSE";
  }
  else if(document.getElementById("MoveButton").value == "PAUSE"){
    dx = 0;
    dy = 0;
    document.getElementById("MoveButton").value = "UNPAUSE";
  }
  else if(document.getElementById("MoveButton").value == "UNPAUSE"){
    dx = speed;
    dy = speed;
    document.getElementById("MoveButton").value="PAUSE";
  }
  }

