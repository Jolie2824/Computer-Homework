/*
////////////////////////////////////////
////////Ghosts by Jolie P/////////
////////////////////////////////////////
*/

//concept for future add score point,music, title, more imaged details, collsions and more cows for the hard mode

let cometX = 753;

let cometY = 50;

let crackX;

let crackY;

let beamX;

let beamY;

let backr= 255;
let backg= 255;
let backb= 255;

let size= 100;

let stop = false;

let cracked;

let aliens;

let beam;

let state = "homescreen"; //storing our states as Strings 

let clouds= 0;

let opacity= 0;

let fade=0.5;

let time= 0;

let black= 0;

let timer = 1000; //setting up timer variable for 1000 millisecond trigger

let currentTime = 0; //tracking millis() clock

let savedTime = 0; // temp saved times, needed for comparison

let cowUP= false;

let cowX = 0; //variable for x value of ellipse (conspect for cow)

let cowY =550; 

let increment = 60;	//variable for increment of x movement

let cowSize = 100; //variable for circle diameter

var backtime;

var wait = 1000; // change this to change the 'ticking'

var c;

function preload () 
{

cracked= loadImage ("images/cracked.png");

aliens= loadImage ("images/aliens.png");

beam= loadImage ("images/beam.png");

}

function setup() {
  createCanvas(800, 800);

  imageMode (CENTER);

  textAlign(CENTER);

  background(0,0,0);

  textFont("Courier New", 25);

  time = millis(); // store the current time
  //note: millis() returns the current number of milliseconds since starting the program.
  //This information is often used for timing events and animation sequences.
  //see http://p5js.org/reference/#/p5/millis

  c = color(255); // black
}

function draw() 
{
homescreen(); 
rules();
game();
gameOver();
 
  if (state == "homescreen") 
	{
    homescreen();
  } 
  else if (state == "rules") 
	{
    rules();
  } 
	else if (state == "game") 
	{
    game();
  } 
	else if (state == "gameOver") 
	{
    gameOver();
  }
	
  //print(state);

 if (cowX > 200 && cowX < 380 )
  {
    cowUP = true;  // turn ON
  } else {
    cowUP = false; // turn OFF
  }

  // use the boolean to control a function or behavior
  if (cowUP) {
    cowbeamed(); // only runs when inside the area
  }

} 

function homescreen() 
{
   background(c);

  //check the difference between now and the previously stored time is greater than the wait interval
  if ((millis() - time) >= wait) {
    c = color(random(255), random(255), random(255)) //if it is, change the background color
    time = millis(); //also update the stored time
  }
  fill(0);
  textSize(46);
  text("Click to start the game", width/1.1, height/2);
}

 function rules () 
 {
  textSize(30);
  background (0,0,0);
  fill(20, 200, 100, opacity);

        //aliens saying hello 
    image (aliens, width - width / 2.6, height - height / 1.7, aliens.width / 1.2, aliens.height / 0.9); 
    text ("Hello humans",260, 25);
        //directions
    fill(20, 200, 100, opacity);
    text("How to save cows.", 350, 75);
    fill(255,255,0,opacity);
    text("Grab 5 cows", 750, 500);
  //fade each text in 30seconds

  text("Miss 3 cows you lose", 750, 550);

  text("Defeat the comet", 750, 600);

  text("Press the F key for lazer beam", 750, 650);

  text("Use the Up arrow key to collect the cows", 750, 700);

  text("Has to be done by the timer or you lose", 750, 750);

  opacity= opacity + fade;

  if (opacity > 255 || opacity < 0) 
	  {
		  fade = +fade;
	  }
  print("opacity: " + opacity);
	print("fade: " + fade);

 }

function game() 
{
  background(backr,backg,backb);

//games running time
let s = millis() / 1000;

  // Style the text.
  textAlign(RIGHT,TOP);
  textSize(18);
  textFont('Courier New');
  fill (time,time,time)
  // Display how long the sketch has run.
  text(`Running time: ${nf(s, 1, 1)} sec`, 5, 100, 90);

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

//comet
comet();

//cow
fill(180,60,20); //color of the cow

currentTime = millis(); //update currentTime in draw so that it is continuously updating

ellipse(cowX,cowY, height / 8, cowSize, cowSize);

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

      cowY = 550;

    }
     else if (cowY > 200)

      {

        fill (200,100,60,0);

      }
		savedTime = currentTime; //assign value of currentTime to savedTime
	}
	
	// print("currentTime: " + int(currentTime));
	// print("savedTime: " + int(savedTime));

  //spot for arrow key so it can go up into the beam
  if (cowUP ==false) 
  {

    cowmoved();

  }

 if (cowY > 200 && cowY < 380 )

  {

    cowY=  -120;
    cowX = 550; 

  }

//ground
strokeWeight (0);
fill(127,127,127);
rect (0,550,800,700);

//timing of crack in the ground by comet

 if (cometX < 375 && cometY > 250 )
  {

    image (cracked, width - width / 1.7, height - height / 3.2, cracked.width / 1.6, cracked.height / 2.5); 

  }

    if (lazerbeam && cometX > 250 && cometY > 350) 
       {

        cometX = 753;

        cometY = 50;
       
      }
lazerbeam();

//topclouds

fill (clouds,clouds,clouds,100);
strokeWeight (1);
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

}

function comet ()
{

  fill(128,28,0);

  circle (cometX,cometY,size);
  size= random (50,100);
  cometX = cometX -0.6;

  cometY = cometY +0.8;

  if (cometY > height || cometX + size / 2 < 0) 
    {
      cometX = width - size / 2; // exact top-right edge
      cometY = 0 - size / 2;     // start just above canvas
    }

}

function lazerbeam () 
{
//lazerbeam
  if (key === 'f')
    { 

      image (beam, width /1.5, height /2.1);
      beam ===true;
    } 
      //when you hit the I key it disarms the lazerbeam
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
  if (state == "homescreen") 
	{

    state = "rules";

  } 
   else if (state== "rules") 
  {

    state = "game";
  }
  else if (state== "game") 
  {

    state = "gameOver";

  }
	else if (state == "gameOver") 
	{

    state = "homescreen";
    
  }
}