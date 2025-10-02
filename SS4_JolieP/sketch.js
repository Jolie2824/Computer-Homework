/*
////////////////////////////////////////
////////Ghosts by Jolie P/////////
////////////////////////////////////////
*/

//concept for future add lazer shooting the comet 

let circleX = 753;

let circleY = 50;

let backr= 255;
let backg= 0;
let backb= 255;

let size= 100;

let stop = false;

let cracked;

let beam;

function preload () {

cracked= loadImage ("images/cracked.png");

beam= loadImage ("images/beam.png");
}
function setup() {
  createCanvas(800, 800);
  imageMode (CENTER);
  textAlign(CENTER); //draws text from centerpoint
	textSize(20); //sets size of text
}

function draw() {
 //future consept for randomizied background colors changing ever 2 seconds
  background(backr,backg,backb);

  //future consept for randomizied background colors changing ever 2 seconds
  /*
currentTime = millis(); //update currentTime in draw so that it is continuously updating

backr= random (255);
backg= random (255);
backb= random (255);

//if 1 second has passed since last saved time, execute code block
	if (currentTime - savedTime > timer) 
	{
		if (background > width)
		{
			background = 0;
		} 
		else 
		
		fill(random(255), random(255), random(255)); //change fill to random color
		
		savedTime = currentTime; //assign value of currentTime to savedTime
	}
*/

//flickering beam
let g= random (255);
let b= random (255);

fill (g,b,mouseY);

quad(600, 550, 500, 400, 300, 400, 150, 550);

//alien warning
fill (0,0,0)
text("We must find a way to get rid of the comet!", width / 2.5, height / 2.5 - 50); //displays text

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

circle (circleX,circleY,size);
size= random (50,100);

circleX = circleX -3;

circleY = circleY +5;

//ground
fill(127,127,127);
rect (0,550,800,700);

//cracked ground
image (cracked, width - width / 2.2, height - height / 3.2, cracked.width / 2, cracked.height / 2.5); 


//clouds

}

function keyPressed() {
  // spacebar toggles between two colors
if (keyCode === 32){
backr= backr + 100;
}


  if (key ==='a')
  {

    backr = 255;
    backg = 255;
    backb = 255;
  }
 
  if (key ==='A')
  {

   backr = 0;
   backg = 0;
   backb = 0;
  }
    if (key === 'f')
    { image (beam, width /4, height /2);} 
}

  function mousePressed () {
  //everything resets
backr=0;
circleX= + 800;
circleY= -5; 

  }