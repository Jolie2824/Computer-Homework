////JolieP////
//future homescreen for final//

// Create an array that will hold frogs.
let aliens = [];

let ufos= [];

let cows= [];

let wait = 1000; // change this to change the 'ticking'

let c;

function setup() {
  createCanvas(800, 800);

  time = millis(); // store the current time
  //note: millis() returns the current number of milliseconds since starting the program.
  //This information is often used for timing events and animation sequences.
  //see http://p5js.org/reference/#/p5/millis

  c = color(255);

  // Add alien objects to the array.
  for (let i = 0; i < 5; i += 0.5) {
    // Calculate random coordinates and size.
    let x = random(0, 800);
    let y = random(0, 800);
    let s = random(5, 150);

    // Create a new alien object.
    let alien = new Alien(x, y, s);

    // Add the alien to the array.
    aliens.push(alien);

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

function draw() {
 background(c);

	if ((millis() - time) >= wait) 
    {
    c = color(random(255), random(255), random(255)) //if it is, change the background color
    time = millis(); //also update the stored time
  	}

// Set the noise level and scale. ref from https://p5js.org/reference/p5/noise/

	let noiseLevel = 255;

  	let noiseScale = 0.05;

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

  for (let alien of aliens) {
    // Show the alien.
    alien.show();

    // Move the alien.
    alien.hop();

    // Wrap around if they've hopped off the edge.
    alien.checkEdges();
  }

  for (let ufo of ufos) {
    // Show the ufo.
    ufo.show();

    // Move the ufo.
    ufo.hop();

    // Wrap around if they've hopped off the edge.
    ufo.checkEdges();
  }

  for (let cow of cows) {
    // Show the cow.
    cow.show();

    // Move the cow.
    cow.hop();

    // Wrap around if they've hopped off the edge.
    cow.checkEdges();
  }
}

class Alien {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text('👽', this.x, this.y);
  }

  hop() {
    this.x += random(-20, 20);
    this.y += random(-20, 20);
  }

  checkEdges() {
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

class Ufo {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text('🛸', this.x, this.y);
  }

  hop() {
    this.x += random(-50, 10);
    this.y += random(-50, 10);
  }

  checkEdges() {
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

class Cow {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text('🐮', this.x, this.y);
  }

  hop() {
    this.x += random(-80, 60);
    this.y += random(-80, 60);
  }

  checkEdges() {
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