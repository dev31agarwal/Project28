
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  ground1, stone1, rope1, boyImage, treeImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var gameState="notLaunched";

function preload()
{
  boyImage= loadImage("boy.png");
  treeImage= loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground1= new Ground(400, 690, 800, 20);

	stone1 = new Stone(100, 500, 40);

	mango1= new Mango(510, 300, 30);
	mango2= new Mango(430, 250, 30);
	mango3= new Mango(600, 280, 30);
	mango4= new Mango(560, 170, 30);
	mango5= new Mango(570, 90, 30);
	mango6= new Mango(500, 180, 30);
	mango7= new Mango(710, 160, 30);
	mango8= new Mango(670, 220, 30);
	mango9= new Mango(750, 300, 30);
	mango10= new Mango(740, 230, 30);
	mango11= new Mango(660, 110, 30);

	rope1= new Launcher(stone1.body,{x:140, y:500});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb (248,213,104));

  image(boyImage, 100, 420, 250, 350);
  image(treeImage, 330, 5, 600, 750);

  textSize(35)
  fill("black");
  text("X:"+ mouseX+" Y:"+mouseY, 50, 80);
  
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  rope1.display();
  drawSprites();
  
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);
  detectCollision(stone1, mango11);
}

function mouseDragged(){
  if(gameState==="notLaunched")
  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  rope1.fly();
  gameState="launched";
}

function detectCollision(stone1, mango1){
  var distance= dist(mango1.body.position.x, mango1.body.position.y, 
    stone1.body.position.x, stone1.body.position.y);

    if(distance<=mango1.radius+stone1.radius){
      Matter.Body.setStatic(mango1.body, false);
    }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone1.body, {x:100, y:500});
    rope1.attach(stone1.body);
  }
}