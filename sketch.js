const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var bridge;
var stone;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  bridge=new Bridge(6,{x:245,y:30})
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink=new Link(bridge,jointPoint);
  stone=Bodies.circle(300,300,20);
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {
  background(51);
  Engine.update(engine);
  ellipse(stone.position.x,stone.position.y,15,15);
  for(var i=0; i<=8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stone=new Stone(x,y,80,80);
    stones.push(stone);
  }


}
