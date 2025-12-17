let backr= 0;
let backg= 106;
let backb= 163;

let size= 100;

let stop = false;

let grass;

let sleepy; //cow

let state = "game"; //storing our states as Strings 

let opacity= 0;

let fade=0.5;

let time= 0;

let black= 0;

let countdown = 180

let timer = 1000; //setting up timer variable for 1000 millisecond trigger

let currentTime = 0; //tracking millis() clock

let savedTime = 0; // temp saved times, needed for comparison

let cowUP= false;

let ufoY= 425;

let cowX = 0; //variable for x value of cow

let cowY = 505; 

let increment = 60;	//variable for increment of x movement

let cowSizew = 100; //variable for circle diameter

let cowSizeh = 100; //variable for circle diameter

let backtime;

let wait = 1000; // change this to change the 'ticking'

let c;

let score;

let xCoordinates = [];

function preload () 
{

sleepy= loadImage ("images/sleepy.png");

grass= loadImage ("images/grass.gif");

}

function setup() {
  createCanvas(800, 800);

  imageMode (CENTER);

  textAlign(CENTER);

  background(0,0,0);

  textFont("Courier New", 25);

  time = millis(); // store the current time

  c = color(255); // black

  score = 0;
  
  for (let x = 100; x < 800; x += 100) {
    xCoordinates.push(x);
  }

}

function draw() 
{

  if (state == "game") 
	{
    game();
  } 
	else if (state == "gameOver") 
	{
    gameOver();
  }

 if (cowX > 200 && cowX < 380 )
  {
    cowUP = true;  // turn ON
  } else {
    cowUP = false; // turn OFF
  }

  // use the boolean to control a function or behavior
  if (cowUP) 
  {
    cowbeamed(); // only runs when inside the area
  }

}

function game() 
{
  background(backr,backg,backb);

//countdown timer from https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
  fill(255,255,255);
  textAlign(CENTER);
  textSize(22);
  text ("countdown:",width/6, height/5);
  text(countdown, width/5.8, height/4.5);
  
  if (frameCount % 60 == 0 && countdown > 0) 
    { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      countdown --;
    }
  if (countdown == 0)
  {
    gameOver();
  }

//flickering ray beam
let r= random (200);
let g= random (60);
let b= random (200);

fill (r,g,b);

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

//clouds

for (let i = 0; i < xCoordinates.length; i += 1) {
    // Update the element at index i.
    xCoordinates[i] += random(-5, 5);

    // Use the element at index i to draw a circle.
    fill(255,255,255);
    ellipse(xCoordinates[i], 50, 120, 100, 250);
  }

//cow - scoreboard for cow
  textSize(20);
  text("score", 630, 200);
  text(score, 650, 220);
  
  //setting up a "winning" condition
  if (score > 10){
    push();
      textSize(80);
      fill('red');
      text("YOU WIN", 20, 200);
    pop();
  }
  //1 point
  fill(100)
  rect(270,505,80,300); 

  //3 points
  fill (255,0,0,100);
  rect(350,505,80,300);

  //1 point
  fill (0,0,255,100);
  rect(430,505,70,300);

currentTime = millis(); //update currentTime in draw so that it is continuously updating
image (sleepy,cowX,cowY, cowSizew, cowSizeh); 

cowX =cowX +5; // you can get the cow into the beam about 5-7 times

	                  //if 1 second has passed since last saved time, execute code block
	if (currentTime - savedTime > timer) 
	{
		if (cowX > width)
		{
			cowX = 0;
		} 
  
    if (cowY < 400)

    {

      cowY = 505;

    }
     else if (cowY > 200)//OG 200

      {

        fill (0);

      }
		savedTime = currentTime; //assign value of currentTime to savedTime
	}

  //spot for arrow key so it can go up into the beam
  if (cowUP ==false) 
  {

    cowmoved();

  }

 if (cowY > 400 && cowY < 500 )

  {

    cowY=  -120;
    cowX = 550; 

  }

//ground
//change to grass gif
strokeWeight (0);
fill(127,127,127);
image (grass, width- width /1, height- height /10, grass.width / 0.3, grass.height/ 1);
}

function cowbeamed()
{
  if (keyIsDown(UP_ARROW) && !keyIsDown(SHIFT))
    {

      cowY= cowY - 60;

    }

}

function cowmoved () 
{
 
    cowX= cowX + 1;

}

function gameOver() 
{
  background(46, 8, 8);
  fill(200,255,55);
  textSize(46);
  text("score:.", width/1.2, height/3.5 + 50);
  fill(255);
  text("click to play again.", width/1.2, height/2.5 + 50);
}

function mousePressed() 
{
  
if (keyCode === UP_ARROW)
  {
    score++; 
  }
else
  if (cowY >= ufoY)
  {

    score++;

  }

 if (state== "game") 
  {

    state = "gameOver";

  }
	else if (state == "gameOver") 
	{
    
    state = "homescreen";
   
  }
}
