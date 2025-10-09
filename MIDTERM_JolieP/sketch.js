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

let clouds= 127;

let opacity= 0;

let fade=1;

let time= 0;

let black= 0;

function preload () {

cracked= loadImage ("images/cracked.png");

beam= loadImage ("images/beam.png");
}
function setup() {
  createCanvas(800, 800);
  imageMode (CENTER);
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

// each time the background changes color different planets pop up


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
//games running time
let s = millis() / 1000;

  // Style the text.
  textAlign(RIGHT,TOP);
  textSize(18);
  textFont('Courier New');
  fill (time,time,time)
  // Display how long the sketch has run.
  text(`Running time: ${nf(s, 1, 1)} sec`, 5, 100, 90);

// aliens popping out and explaining
//alien warning
fill (opacity); //set the fade to a timer
textAlign(CENTER); //draws text from centerpoint
textSize(20); //sets size of text
fill (black);
text("We must find a way to get rid of the comet!", width / 2.5, height / 2.5 - 50); //displays text
/*opacity= opacity + fade;

if (opacity > 255 || opacity < 0) 
	{
		fade = -fade;
	}
  */
//fading text for each given step

//flickering ray beam
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

fill (255,255,0); //yellow lights

ellipse (500, 380, 15, 10);
ellipse (305, 380, 15, 10);


//comet

fill(128,28,0);

circle (circleX,circleY,size);
size= random (50,100);

circleX = circleX -3;

circleY = circleY +5;


//timing of comet
//chance of not hitting the ground, aliens pop up congratulating you

//ground
strokeWeight (0);
fill(127,127,127);
rect (0,550,800,700);

//timing of crack in the ground by comet
//aliens popping out saying you failed try again

//cracked ground
image (cracked, width - width / 2.2, height - height / 3.2, cracked.width / 2, cracked.height / 2.5); 

//fill for ground
fill (127,127,127);
rect (250,550,350,350);
//topclouds

fill (clouds,clouds,clouds,100);
strokeWeight (2);
ellipse (750,20,200,80);
ellipse (650,0,200,80);
fill (clouds,clouds,clouds,200);
ellipse (550,0,200,80);
ellipse (450,0,200,80);
fill (clouds,clouds,clouds,150);
ellipse (300,0,200,80);
ellipse (100,50,200,80);
ellipse (10,20,200,80);

//bottom clouds
fill (clouds,clouds,clouds,200);
ellipse (150,0,200,80);
ellipse (250,50,200,80);
ellipse (350,50,200,80);
fill (clouds,clouds,clouds,150);
ellipse (450,50,200,80);
ellipse (550,50,200,80);
fill (clouds,clouds,clouds,150);
ellipse (650,50,200,80);
ellipse (750,50,200,80);

//beam
if (key === 'f')
    { image (beam, width /1.5, height /2.1);} 

}

//if beam isn't prressed in 10seconds you will let the comet hit and fail

function keyPressed() {
  // spacebar toggles between two colors
if (keyCode === 32){
backr= backr + 100;
}


  if (key ==='a')
  {
    black=0;
    time=0;
    clouds= 0;
    backr = 255;
    backg = 255;
    backb = 255;
  }
 
  if (key ==='A')
  {
   black=255;
   time=255;
   clouds= 255;
   backr = 0;
   backg = 0;
   backb = 0;
  }
    
}

  function mousePressed () {
  //everything resets
backr=0;
circleX= + 800;
circleY= -5; 

  }
