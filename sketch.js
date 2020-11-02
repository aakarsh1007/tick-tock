var hr,mn,sc;
var Angle, angle;
var map;

function setup() {
  createCanvas(1000,500);
  //calculating time using predefined function from p5.js
hr = hour();
mn = minute();
sc = second();

angleMode(DEGREES);
}

function draw() {
  background("black");
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,90,0,360);
  hrAngle = map(hr,0,180,0,360);
 
  createLine(); 
  translate(); 
  drawSprites();
}
function createLine(){
  stroke(255,0,0);
  strokeWeight(7);
 circle(250,250,400);
  
  stroke(0,255,0);
  strokeWeight(5);
  line(250,250,50,250);
  
  stroke(0,0,255);
  strokeWeight(5);
  line(250,250,100,115);
  
 stroke(255,0,0);
 strokeWeight(5);
 line(250,250,150,350);
 
}