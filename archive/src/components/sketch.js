// import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import Font from '../assets/IBMPlexSans-Regular.ttf'
// The seed that will spawn our p5 sketch.

// ------------------------------------------------- //

const Seed = (sketch) => {

  // ------------------------------------------------- //

  const Agent = function() {
    this.vector = sketch.createVector(sketch.random(cube), sketch.random(cube), sketch.random(cube));
    this.vectorOld = this.vector.copy();
    this.stepSize = sketch.random(1, 5);
    this.isOutside = false;
    this.angle = 0;
    this.positions = [];
    this.gaps = [];
  }

  Agent.prototype.update = function(strokeWidth) {
    sketch.strokeWeight(strokeWidth * this.stepSize);

    this.vector.x += sketch.cos(this.angle) * this.stepSize;
    this.vector.y += sketch.sin(this.angle) * this.stepSize;
    this.vector.z += sketch.cos(this.angle) * this.stepSize;
    //this.vector.z = 0;
    this.isOutside = this.vector.x < 0 || this.vector.x > cube || this.vector.y < 0 || this.vector.y > cube || this.vector.z < 0 || this.vector.z > cube/5;

    var isGap = false;

    if (this.isOutside) {
      this.vector.set(sketch.random(cube), sketch.random(cube), sketch.random(cube/5));
      //this.vector.set(random(cube), random(cube));
      isGap = true;
    }
    this.positions.push(this.vector.copy());
    this.gaps.push(isGap);

    if (this.positions.length > 10) {
      this.positions.shift();
      this.gaps.shift();
    }

    sketch.beginShape();
    for (var i = 0; i < this.positions.length; i++) {
      if (this.gaps[i]) {
        sketch.endShape();
        sketch.beginShape();
      }
      sketch.vertex(this.positions[i].x, this.positions[i].y, this.positions[i].z);
    }
    sketch.endShape();

    this.isOutside = false;
  }

  Agent.prototype.updateNoise = function(noiseScale, noiseStrength, strokeWidth) {
    this.angle = sketch.noise(this.vector.x / noiseScale + sketch.frameCount/100, this.vector.y / noiseScale) * noiseStrength;
    this.update(strokeWidth);
  }

  // ------------------------------------------------- //

  let textTyped = "e";

  let font;
  let fontSize = 500;
  let textImg;

  let angle = 0.5;
  let cube = 500;
  let step = 0.001;

  // Load in our type
  sketch.preload = () => font = sketch.loadFont(Font);
  // Pre-loading graphic outside our work
  sketch.setupText = () => {
    // create an offscreen graphics object to draw the text into
    textImg = sketch.createGraphics(cube, cube);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, cube/4.5, fontSize-115);
    textImg.loadPixels();
  }
  // ------------------------------------------------- //
  // Noise 'agents' parametres
  let agents = [];
  let agentCount = 400;
  let noiseScale = 300;
  let noiseStrength = 10;
  let strokeWidth = 0.3;

  sketch.windowResized = () => {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  sketch.setup = () => {
    // const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
    sketch.setupText();
    sketch.frameRate(30);
    for(let i = 0; i < agentCount; i++) {
      agents[i] = new Agent();
    }
    sketch.rotateY(10);
    sketch.noStroke();
  }

  sketch.draw = () => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    sketch.background(0);
    if (w < 1000) {
      sketch.scale(0.5);
    }

    angle = sketch.sin(sketch.frameCount / 10) * .4;

    sketch.rotateY(angle);
    angle += step;

    sketch.noFill();
    sketch.stroke(255);
    sketch.box(cube, cube, cube/5);

    sketch.translate(-cube/2, -cube/2);

    for (let i = 0; i < agentCount; i++) {
      // Draw agent + apply noise movement
      // agents[i].updateNoise(noiseScale, noiseStrength, strokeWidth);
      // Find pos of every agent??????
      // console.log(agents[i].vector.x);
      // Loop through text graphic + check to see if overlap?????
      // Calculate the index for the pixels array from x and y
      // Index? pos of pixel? matches vector??
      let index = sketch.floor(sketch.floor(agents[i].vector.x) + sketch.floor(agents[i].vector.y) * textImg.width) * 4;
      // console.log(index);
      let red = textImg.pixels[index];
      // console.log(agents[i].vector.x + " " + agents[i].vector.y);
      if (red < 100) {
        sketch.noStroke();
        sketch.fill(255);
        //ellipse(agents[i].vector.x, agents[i].vector.y, 5, 5);
        agents[i].updateNoise(10, 50, strokeWidth);
      } else {
        sketch.noStroke();
        sketch.fill(0,0,250);
        agents[i].updateNoise(noiseScale, noiseStrength, strokeWidth);
      }
    }
  }

}

export default Seed;
