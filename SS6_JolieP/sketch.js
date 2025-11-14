/////Jolie Padilla/////
//making beams slowly shoot out wwith a noise background
//going for rays coming out of clouds 


let pointX = []; //declare array called pointX

pointX.length = 1; //set length of pointX array to 2

let pointY = []; //declare array called pointY

pointY.length = 1; //set length of pointY array to 2

let strokeW = []; //declare array for stroke weights

strokeW.length = 1; //set length of strokeW array to 2

let move = 5; // variable for point movement

let wait = 1000;

function setup() 
{
  createCanvas(800, 800);
time = millis();
  	//initializing the array with for loop and random numbers
	for (let i = 0; i < pointX.length; i++) 
	{
    
		pointX[i] = random(width);
		pointY[i] = random(height);
		strokeW[i] = random(1, 20);
	}
}

function draw() 
{
	background(0);

	let noiseLevel = 200;

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
	//iterate through array and draw lines
	for (let i = 0; i < pointX.length; i++)
	{
    	stroke(0,255,200, 64);  //red lines with some transparency
      strokeWeight(strokeW[i]); //set stroke weight from array

    	//draw line from point to center of canvas

    	line(pointX[i] + move, pointY[i] + move, width/2, height/2);

		//if outer points go off canvas, move in the other direction
		if (pointX[i] + move > width * 2 || pointX[i] + move < -width * 2) 
		{
			move = -move;
		} 
		else 
		{
			pointX[i] += move;
		}
  	}
    
	// the push() array method adds new random values to the end of an array
	pointX.push(random(width));
	pointY.push(random(height));
	strokeW.push(random(1, 20));

	//print the new length of the pointX array to the console for monitoring
	print("Array Length = " + pointX.length);

}