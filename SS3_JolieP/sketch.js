/*
////////////////////////////////////////
////////Ghosts by Jolie P/////////
////////////////////////////////////////
*/
/*spinning shapes*/

//ellipse vars
let x= 0;
let y= 0;
let xMove= 0;
let yMove= 0;

//rectangles var
let rectX =0;
let rectY =0;
let size =100;

//fill color var
let r =0;
let g =255;
let b = 0;

let stop = false;


function setup() 
{
  createCanvas(1000, 1000);
  rectMode (CENTER);
 
  //start both shapes at center of canvas
  x= width /2;
  y= height /2;
  rectX = width /2;
  rectY = height /2;

}

function draw() 
{ 
background(r,g,b);
fill (0,0,56)
ellipse (x,y, size,size);
rect (rectX, rectY, size, size);

  if (!stop)
  {
    x += xMove; 
    y += yMove; 
  }


  if (x >= width || x <= 0) 
  {

   xMove = -xMove;
   
  }

   if (y >= height || y <= 0) 
   {

    yMove = -yMove;

   }
   //move rectangle using directional arrows
   if (keyIsDown(LEFT_ARROW))
   {

    rectX--;
    
   }

   if (keyIsDown(RIGHT_ARROW))
   {
    rectX++;


   }
   if (keyIsDown(DOWN_ARROW) && !keyIsDown(SHIFT))

    {

      rectY++;

    }

    if (keyIsDown(UP_ARROW) && !keyIsDown(SHIFT))
    {

      rectY--;

    }

    if (keyIsDown(UP_ARROW) && !keyIsDown(SHIFT))
    {
      size++;

    }

      if (keyIsDown(DOWN_ARROW) && !keyIsDown(SHIFT))
      {
        size--;

      }
}

function mousePressed () 
{

 xMove = random (-50, 50);
 yMove = random (-50, 50);

 r = random (255);
 g = random (255);
 b = random (255);

 size= random(50,500);
}

function keyPressed ()
{

  if (key ==='a')
  {

    r = 255;
    g = 255;
    b = 255;
  }
  
  if (key ==='A')
  {

   r = 0;
   g = 0;
   b = 0;
  }

  if (keyCode ===ENTER)
  {

    stop = !stop 

  }
}