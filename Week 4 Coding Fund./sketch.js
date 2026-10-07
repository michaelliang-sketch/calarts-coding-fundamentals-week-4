let angle;

function setup() {

  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  rectMode(CENTER);


  angle = 75;
  rotSpeed= random(1,5);

}


function draw() {

  background(1,10);
  

  noFill();
  strokeWeight(15);
  stroke(255);
  
  push();
  translate(width/2,height/2);
  fill('blue');
  rotate(angle);  
  rect(0,0,200,200);
  pop();


  push();
  translate(width/4,height/4);
  rect(0,0,200,200);
  fill('red');
  rotate(angle);
  rect(0,0,200,200);
  pop();

  push();
  translate(width/1,height/4);
  rect(0,200,200,200);
  rotate(angle);
  rect(0,100,200,200);
fill('green');
  pop();
  

  push();
  translate(width/1,height/4);
  rect(200,200,200,200);
  rotate(angle);
  rect(0,0,200,200);
    fill('yellow');
  pop();

  push();
  translate(width/4,height/4);
  rect(20,20,20,20);
  rotate(angle);
  rect(0,0,200,200);
  pop();



  angle += rotSpeed;
  

}
