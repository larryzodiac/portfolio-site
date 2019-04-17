/*
  Evan MacHale - N00150552
  17.04.19
  02.js
*/

import 'p5/lib/addons/p5.dom';
import Font from '../../assets/IBMPlexSans-Regular.ttf'

// The seed that will spawn our p5 p.
const s02 = (p) => {

  /*
    Agents
  */

  const Agent = function() {
    this.vector = p.createVector(p.random(p.width), p.random(p.height), p.random(200));
    this.vectorOld = this.vector.copy();
    this.stepSize = p.random(1, 5);
    this.isOutside = false;
    this.angle = 0;
    this.positions = [];
    this.gaps = [];
  }

  Agent.prototype.update = function(strokeWidth) {
    p.strokeWeight(strokeWidth * this.stepSize);
    this.vector.x += p.cos(this.angle) * this.stepSize;
    this.vector.y += p.sin(this.angle) * this.stepSize;
    this.vector.z += p.cos(this.angle) * this.stepSize;
    this.isOutside = this.vector.x < 0 || this.vector.x > p.width || this.vector.y < 0 || this.vector.y > p.height || this.vector.z < 0 || this.vector.z > cube/5;
    let isGap = false;
    if (this.isOutside) {
      this.vector.set(p.random(p.width), p.random(p.height), p.random(cube/5));
      //this.vector.set(random(cube), random(cube));
      isGap = true;
    }
    this.positions.push(this.vector.copy());
    this.gaps.push(isGap);
    if (this.positions.length > 20) {
      this.positions.shift();
      this.gaps.shift();
    }
    p.beginShape();
    for (let i = 0; i < this.positions.length; i++) {
      if (this.gaps[i]) {
        p.endShape();
        p.beginShape();
      }
      p.vertex(this.positions[i].x, this.positions[i].y, this.positions[i].z);
    }
    p.endShape();
    this.isOutside = false;
  }

  Agent.prototype.updateNoise = function(noiseScale, noiseStrength, strokeWidth) {
    this.angle = p.noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * noiseStrength;
    this.update(strokeWidth);
  }

  /*
    s02 sketch
  */

  const id = 's02';
  let elw, elh;
  let canvas;
  let textTyped = "e";
  let font;
  const fontSize = 500;
  let textImg;
  let angle = 0.5;
  const cube = 500;
  const step = 0.001;
  let agents = [];
  const agentCount = 1000;
  const noiseScale = 1000;
  const noiseStrength = 50;
  const strokeWidth = 0.3;

  p.preload = () => font = p.loadFont(Font);

  p.setupText = () => {
    textImg = p.createGraphics(p.width/2, p.width/2);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, cube/4.5, fontSize-115);
    textImg.loadPixels();
  }

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    elh = window.innerHeight;
    canvas = p.createCanvas(elw, elh, p.WEBGL);
    canvas.parent(id);
    p.setupText();
    p.frameRate(60);
    for (let i = 0; i < agentCount; i++) {
      agents[i] = new Agent();
    }
    p.noStroke();
  }

  p.draw = () => {
    p.smooth();
    p.ortho(-p.width * 5, p.width * 5, p.height * 5, -p.height * 5, 0, 500);
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    p.background(255);
    if (w < 1000) p.scale(0.5);
    const mX = p.constrain(p.mouseX, 0, p.width);
    const mouse = p.map(mX, 0, p.width, 170, 200);
    const rotationSpeed = p.sin(p.radians(mouse)) * 0.5;
    p.rotateY(rotationSpeed);
    // angle += step;
    p.translate(-p.width/2, -p.height/2);
    for (let i = 0; i < agentCount; i++) {
      let index = p.floor(p.floor(agents[i].vector.x) + p.floor(agents[i].vector.y) * textImg.width) * 4;
      let red = textImg.pixels[index];
      if (red < 100) {
        p.noStroke();
        p.fill(0);
        agents[i].updateNoise(10, 50, strokeWidth);
      } else {
        p.noStroke();
        p.fill(0,0,250);
        agents[i].updateNoise(noiseScale, noiseStrength, strokeWidth);
      }
    }
  }

  p.windowResized = () => {
    elw = document.getElementById(id).offsetWidth;
    elh = window.innerHeight;
    p.resizeCanvas(elw,elh);
  }

}

export default s02;
