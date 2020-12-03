const Engine  = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies;

var myEngine, myWorld

var box1, box2, ground;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

 box1 = new Box(200,300,50,50);
 box2 = new Box(220,100,50,100);

 ground = new Ground(200,390,400,20);

  //console.log(ground);


}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  box1.display();
  box2.display();

  ground.display();

}


