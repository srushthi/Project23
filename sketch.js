var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redBox1,redBox2,redBox3;
var redBox1IMG,redBox2IMG,redBox3IMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	redBox1IMG=loadImage("RedBox1.png");
	redBox2IMG=loadImage("RedBox2.png");
	redBox3IMG=loadImage("RedBox3.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redBox1=createSprite(200,50,200,20);
	redBox1.addImage(redBox1IMG)
	

	redBox2=createSprite(200,50,100,20);
	redBox2.addImage(redBox2IMG)
	

	redBox3=createSprite(210,50,100,20);
	redBox3.addImage(redBox3IMG)
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    Matter.Body.setStatic(redBox1,true);
    
  }
}



