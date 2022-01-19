
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var walls;
var ball;





function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

 

   
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	var options_ball = {isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2}
    ball = Bodies.circle(500,100,20, options_ball)
    World.add(world, ball);

  
    ground= new Ground(width/2, 690, width, 30);

  wall1= new Ground(1100, 600, 20, 160);
  wall2= new Ground(1300, 600, 20, 160);
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  
 
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y , 30);

 



}
function keyPressed() {

  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(ball,ball.position,{x:85,y:-65})
  }
  }

