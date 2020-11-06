/*
  Evan MacHale - N00150552
  01.04.19
  01.js
*/

// import 'p5/lib/addons/p5.dom';
// import Font from '../assets/IBMPlexSans-Regular.ttf'

// The seed that will spawn our p5 p.
const s01 = (p) => {

    /*
      Agents
    */

    const Agent = function () {
        this.vector = p.createVector(p.random(cube), p.random(cube), p.random(cube));
        this.vectorOld = this.vector.copy();
        this.stepSize = p.random(1, 5);
        this.isOutside = false;
        this.angle = 0;
        this.positions = [];
        this.gaps = [];
    }

    Agent.prototype.update = function (strokeWidth) {
        p.strokeWeight(strokeWidth * this.stepSize);
        this.vector.x += p.cos(this.angle) * this.stepSize;
        this.vector.y += p.sin(this.angle) * this.stepSize;
        this.vector.z += p.cos(this.angle) * this.stepSize;
        this.isOutside = this.vector.x < 0 || this.vector.x > cube || this.vector.y < 0 || this.vector.y > cube || this.vector.z < 0 || this.vector.z > cube / 5;
        let isGap = false;
        if (this.isOutside) {
            this.vector.set(p.random(cube), p.random(cube), p.random(cube / 5));
            //this.vector.set(random(cube), random(cube));
            isGap = true;
        }
        this.positions.push(this.vector.copy());
        this.gaps.push(isGap);
        if (this.positions.length > 10) {
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

    Agent.prototype.updateNoise = function (noiseScale, noiseStrength, strokeWidth) {
        this.angle = p.noise(this.vector.x / noiseScale + p.frameCount / 100, this.vector.y / noiseScale) * noiseStrength;
        this.update(strokeWidth);
    }

    /*
      s01 sketch
    */

    const id = 's01';
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
    const agentCount = 400;
    const noiseScale = 300;
    const noiseStrength = 10;
    const strokeWidth = 0.3;

    // p.preload = () => font = p.loadFont(Font);

    p.setupText = () => {
        textImg = p.createGraphics(cube, cube);
        textImg.pixelDensity(1);
        textImg.background(255);
        // textImg.textFont(font);
        textImg.textSize(fontSize);
        textImg.text(textTyped, cube / 4.6, fontSize - 120);
        textImg.loadPixels();
    }

    p.setup = () => {
        elw = document.getElementById(id).offsetWidth;
        elh = window.innerHeight;
        canvas = p.createCanvas(elw, elh, p.WEBGL);
        canvas.parent(id);
        p.setupText();
        p.frameRate(30);
        for (let i = 0; i < agentCount; i++) {
            agents[i] = new Agent();
        }
        p.rotateY(10);
        p.noStroke();
    }

    p.draw = () => {
        p.smooth();
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        p.background(0);
        if (w < 1000) p.scale(0.5);
        angle = p.sin(p.frameCount / 10) * .4;
        p.rotateY(angle);
        angle += step;
        p.noFill();
        p.stroke(255);
        p.box(cube, cube, cube / 5);
        p.translate(-cube / 2, -cube / 2);
        for (let i = 0; i < agentCount; i++) {
            let index = p.floor(p.floor(agents[i].vector.x) + p.floor(agents[i].vector.y) * textImg.width) * 4;
            let red = textImg.pixels[index];
            if (red < 100) {
                p.noStroke();
                p.fill(255);
                agents[i].updateNoise(10, 50, strokeWidth);
            } else {
                p.noStroke();
                p.fill(0, 0, 250);
                agents[i].updateNoise(noiseScale, noiseStrength, strokeWidth);
            }
        }
    }

    p.windowResized = () => {
        elw = document.getElementById(id).offsetWidth;
        elh = window.innerHeight;
        p.resizeCanvas(elw, elh);
    }

}

export default s01;
