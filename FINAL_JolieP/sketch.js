/*
////////Ghosts by Jolie P/////////
*/

//concept for future add score point,music, more imaged details, hard mode
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

let grass;

let sleepy; //cow

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

let cowX = 0; //variable for x value of cow

let cowY =505; 

let increment = 60;	//variable for increment of x movement

let cowSizew = 100; //variable for circle diameter

let cowSizeh = 100; //variable for circle diameter

let backtime;

let wait = 1000; // change this to change the 'ticking'

let Music;

let ufos= [];

let cows= [];

let c;

let data = { x: 550, y: 350, d: 10 };

function preload () 
{

cracked= loadImage ("images/cracked.png");

aliens= loadImage ("images/aliens.png");

beam= loadImage ("images/beam.png");

sleepy= loadImage ("images/sleepy.png");

grass= loadImage ("images/grass.gif");

Music= loadSound ("music/Music.mp3");

}

function setup() {
  createCanvas(800, 800);

  imageMode (CENTER);

  textAlign(CENTER);

  background(0,0,0);

  textFont("Courier New", 25);

  time = millis(); // store the current time

  c = color(255); // black


// Add alien objects to the array.
  
  for (let i = 0; i < 5; i += 0.5) {
    // Calculate random coordinates and size.
    let x = random(0, 800);
    let y = random(0, 800);
    let s = random(5, 150);

   // Create a new ufo object.
    let ufo = new Ufo(x, y, s);

    // Add the ufo to the array.
    ufos.push(ufo);

    // Create a new cow object.
    let cow = new Cow(x, y, s);

    // Add the ufo to the array.
    cows.push(cow);
  }
  
}

function draw() 
{

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
  if (cowUP) 
  {
    cowbeamed(); // only runs when inside the area
  }

}

function homescreen() 
{
   background(c);

  //check the difference between now and the previously stored time is greater than the wait interval
  if ((millis() - time) >= wait) 
    {
    c = color(random(255), random(255), random(255),100) //if it is, change the background color
    time = millis(); //also update the stored time
  }
  fill(0);
  textSize(46);
  text("Cow Invaders", width/2, height/2.5);
  textSize(34);
  fill(255);
  stroke(0,0,0,100);
  strokeWeight(4);
  text("Click to start", width/2, height/2);

  for (let ufo of ufos) 
    {
    // Show the ufo.
    ufo.show();

    // Move the ufo.
    ufo.hop();

    // Wrap around if they've hopped off the edge.
    ufo.checkEdges();
  }

  for (let cow of cows) 
    {
    // Show the cow.
    cow.show();

    // Move the cow.
    cow.hop();

    // Wrap around if they've hopped off the edge.
    cow.checkEdges();
  }

}

  class Ufo 
  {
  constructor(x, y, size) 
  {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() 
  {
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text('🛸', this.x, this.y);
  }

  hop() 
  {
    this.x += random(-50, 10);
    this.y += random(-50, 10);
  }

  checkEdges() 
    {
      if (this.x > width) {
      this.x = this.x - width;
      } else if (this.x < 0) {
      this.x = width - this.x;
      }

      if (this.y > height) {
      this.y = this.y - height;
      } else if (this.y < 0) {
      this.y = height - this.y;
      }
    }
      
  }

  class Cow 
  {
    constructor(x, y, size) 
    {
      this.x = x;
      this.y = y;
      this.size = size;
    }

  show() 
  {
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text('🐮', this.x, this.y);
  }

  hop() 
  {
    this.x += random(-80, 60);
    this.y += random(-80, 60);
  }

  checkEdges() 
  {
    if (this.x > width) {
      this.x = this.x - width;
    } else if (this.x < 0) {
      this.x = width - this.x;
    }

    if (this.y > height) {
      this.y = this.y - height;
    } else if (this.y < 0) {
      this.y = height - this.y;
    }
  }

}

 function rules () 
 {
  background (0,0,0);
        //aliens saying hello 
        textAlign(CENTER, CENTER);
        textSize(150);
        // Access the object's values using the . operator.
        text('👽',data.x, data.y, data.d);

        // Update the object's x and y properties.
        data.x += random(-5, 5);
        data.y += random(-5, 5);

  textSize(30);
  
  fill(20, 200, 100, opacity);
    text ("Hello humans",260, 25);
        //directions
    fill(20, 200, 100, opacity);
    text("How to save cows.", 350, 75);
    fill(255,255,0,opacity);
    text("Grab 5 cows", 650, 500);
  //fade each text in 30seconds

  text("Miss 3 cows or the comet gameover", 450, 550);

  text("Defeat the comet", 600, 600);

  text("Press the F key for lazer beam", 500, 650);

  text("Use the Up arrow key to collect the cows", 400, 700);

  text("Has to be done by the timer or gameover", 400, 750);

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
  fill (0);
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
//change to grass gif
strokeWeight (0);
fill(127,127,127);
image (grass, width- width /1, height- height /10, grass.width / 0.3, grass.height/ 1);
//rect (0,550,800,700);

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
    //Music.play();

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
    //Music.stop();
  }
}

