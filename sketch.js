var bg,bgImg;
var security,system;
var score=0; 

function preload(){
 bgImg = loadImage("images/bg.jpg")
 Img = loadImage("images/1.jpg");
 job = loadImage("images/jobs.jpg");
 effect = loadImage("images/effects.png");
 chart = loadImage("images/chart.png");
 icon = loadImage("images/ICON.png");
 about = loadImage("images/about.png");
 quiz = loadImage("images/quiz.jpg");
 types = loadImage("images/types.png");
 goldImg = loadImage("images/gold.png");
}
function setup() {
  createCanvas(1520,720);
  background(bgImg);
  security = new Security;
  system = new System;
}

function draw() {
  security.display();
  drawSprites();

fill(255);
textSize(44);
text(score,150,700);

//condition
if (score === 30){
  clear();
  background(goldImg);
  }
}