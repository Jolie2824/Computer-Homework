/////JolieP_Clouds/////


let y = 0;

let wait = 1000; // change this to change the 'ticking'

let c;

function setup() 
{
	createCanvas(500, 500);
	time = millis(); // store the current time
  //note: millis() returns the current number of milliseconds since starting the program.
  //This information is often used for timing events and animation sequences.
  //see http://p5js.org/reference/#/p5/millis

  c = color(255);
}

function draw() 
{
	background(c);

	if ((millis() - time) >= wait) 
    {
    c = color(random(255), random(255), random(255)) //if it is, change the background color
    time = millis(); //also update the stored time
  	}

	// Set the noise level and scale. ref from https://p5js.org/reference/p5/noise/

	let noiseLevel = 255;

  	let noiseScale = 0.01;

  // Iterate from top to bottom.
  for (let y = 0; y < height; y += 1) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += 1) {
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;

      // Compute the noise value.
      let b = noiseLevel * noise(nx, ny);

      // Draw the point.
      stroke(b);
      point(x, y);
    }
	}

//you can add strokeweight to this

    for (let i = 0; i < width; i = i + 50) 
   {
     line(i, 0, i, height);
   }
 
   //for loop drawing horizontal lines from top to bottom
   for (let i = 0; i < height; i = i + 50) 
   {
     line(0, i, width, i);
   }

   
}