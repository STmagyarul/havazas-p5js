/*havazás szimuláció*/
let particles;
let gravity;
let wind;

class Particle {
	
	constructor(position){
		this.size = random(3, 17);
		this.velocity = createVector(random(-0.5, 0.5), random(0, 4));
		this.position = position;
	}

	display(){
		  stroke(200);
		  strokeWeight(2);
		  fill(255);
		  ellipse(this.position.x, this.position.y, this.size, this.size);
		  
	}
	
	fall(){
		  this.velocity.add(gravity);
		  this.velocity.add(createVector(random(-0.05, 0.05), 0));
		  this.position.add(this.velocity);
		  
		  if (this.position.y > 600){

			  this.velocity = createVector(random(-0.5, 0.5), random(0, 4));
			  
			  this.position = createVector(random(0, width), random(-100, -10))
			  this.size = random(3, 17);
			  
		  }
		  this.velocity.limit(this.size * 0.4);
		  this.display();
	}
	
};


// main
function setup() {

  createCanvas(1000, 600);
  gravity = createVector(0, 0.005);
  particles = [];

  for (i = 0; i < 250; i++){
	  particles[i] = new Particle(createVector(random(0, width), random(-100, -10)));
  }
  
}

function draw() {

  background(50);
  wind = random(-0.15, 0.15);

  particles.forEach((particle) => {
		particle.velocity.add(createVector(wind, 0));
		particle.fall();
	  }) 
}