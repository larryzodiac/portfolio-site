import p5 from 'p5';
// The seed that will spawn our p5 sketch.
const Seed = (sketch) => {

  class Bird {
    constructor() {
      this.location = sketch.createVector(sketch.random(sketch.width),sketch.random(sketch.height));
      this.velocity = sketch.createVector(3,3);
      this.acceleration = sketch.createVector();
    }

    update() {
      const mouse = sketch.createVector(sketch.mouseX,sketch.mouseY);
      this.acceleration = p5.Vector.sub(mouse, this.location);
      this.acceleration.setMag(0.2);
      this.velocity.add(this.acceleration);
      this.velocity.limit(10);
      this.location.add(this.velocity);
    }

    display() {
      sketch.noStroke();
      sketch.fill(180,0,0);
      sketch.ellipse(this.location.x, this.location.y, 1.5, 1.5);
    }
  }

  sketch.windowResize = () => {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  const birds = [];

  sketch.setup = () => {
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight*6);
    // Create new objects
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w < 1000) {
      for (let i = 0; i < 50; i++) {
        birds[i] = new Bird();
      }
    } else {
      for (let i = 0; i < 1000; i++) {
        birds[i] = new Bird();
      }
    }
  }

  sketch.draw = () => {
    sketch.fill(0,80);
    sketch.rect(0,0,sketch.width,sketch.height);
    // Call functionality
    for (let i = 0; i < birds.length; i++) {
      birds[i].update();
      birds[i].display();
    }
  }

}

export default Seed;
