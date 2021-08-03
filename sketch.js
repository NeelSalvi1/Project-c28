
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper= new Paper(200,500,30)
  ground = new Ground(600,height,1300,20)
  dustbin= new Dustbin(680,680,200,100)


}
function draw() {
  rectMode(CENTER);
  background(0);
 paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-170});
	}
	}


