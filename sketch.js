
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5

var rope1,rope2,rope3,rope4,rope5;

var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	bobObject1 = new Bob(200,400,50);
	bobObject2 = new Bob(300,400,50);
	bobObject3 = new Bob(400,400,50);
	bobObject4 = new Bob(500,400,50);
	bobObject5 = new Bob(600,400,50);

	roof1 = new Roof(400,50,750,100);

	rope1 = new Rope(bobObject1.body, roof1.body, -200);
	rope2 = new Rope(bobObject2.body, roof1.body, -100);
	rope3 = new Rope(bobObject3.body, roof1.body, 0);
	rope4 = new Rope(bobObject4.body, roof1.body, 100);	
	rope5 = new Rope(bobObject5.body, roof1.body, 200);			

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(0);

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof1.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -70, y: -70});
	}



}

