const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  var ballOptions={
    restitution: 0.8
  }

  ball = Bodies.circle(200,200,20,ballOptions)
  World.add(world, ball)

  ball2 = Bodies.circle(200,350,20,ballOptions)
  World.add(world,ball2)

  con = Matter.Constraint.create({
    pointA: {x:200, y:10},
    bodyB: ball,
    
    length: 100,
    stiffness: 0.1
  })

  con2 = Matter.Constraint.create({
    bodyA : ball,
    bodyB : ball2,
    length : 120,
    stiffness: 0.4
  })

  World.add(world, con)
  World.add(world,con2)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20)

  ellipse(ball2.position.x, ball2.position.y, 20)

  push()
  strokeWeight(2)
  stroke(255)
  line(con.pointA.x, con.pointA.y, con.bodyB.position.x, con.bodyB.position.y);
  line(con2.bodyA.position.x, con2.bodyA.position.y, con2.bodyB.position.x, con2.bodyB.position.y )
  pop()

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.04, y:0})
  }
}

