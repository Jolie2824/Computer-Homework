/*
////////////////////////////////////////
////////Ghosts by Jolie P/////////
////////////////////////////////////////
*/

//concept for future add clouds and a ground with it in cracks

let circleX = 753;

let circleY = 50;

let backr= 0;
let backg=255;
let backb=255;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  //black and white background 0-255 RGB background set (r,g,b)
  background(backr,backg,backb);

//flickering beam
let g= random (255);
let b= random (255);

fill (g,b,mouseY);

 quad(600, 550, 500, 400, 300, 400, 150, 550);

//spaceship

fill (0,57,40);


ellipse (400, 350, 200, 80);

ellipse (400, 360, 300, 80);
ellipse (400, 365, 350, 80);

strokeWeight (0);

ellipse (400, 355, 250, 80);

//window

strokeWeight (1);

fill (0,60,150,150)

ellipse (400, 350, 200, 80);

//lights
fill (15,150,200) //blue lights

ellipse (400, 400, 15, 10);
ellipse (550, 350, 15, 10);
ellipse (250, 350, 15, 10);

fill (255,255,0) //yellow lights

ellipse (500, 380, 15, 10);
ellipse (305, 380, 15, 10);

//comet
fill(128,28,0);

circle (circleX,circleY,40,60);

circleX = circleX -3;

circleY = circleY +5;

}

function keyPressed() {
  // spacebar toggles between two colors
if (keyCode === 32){
backr= backr + 100;
}
  } 

  function mousePressed () {
  //everything resets
backr=0;
circleX= + 800;
circleY= -5; 

  }