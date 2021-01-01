const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var polygonObj
var target1,target2,target3,target4,target5,target6,target7,target8,target9,target10,targettarget11,target12,target13,target14,target15,target16,target17,target18,target19,target20,target21,target22,target23,target24,target25
var groundObj
var platform1
var platform2
var slingObj
var score=0
function preload(){
  }

function setup() {
	createCanvas(1000, 400);
	engine = Engine.create();
    world = engine.world;
    // make sprites here

    polygonObj=new Polygon(200,200,20)
    groundObj=new ground(400,400,10000,20)

    slingObj =new Sling(polygonObj.body,{x:170,y:200})
    platform2=new ground(400,300,200,20)
    platform1=new ground(800,250,300,20)

    target1=new targets(400,220,30,30);
    target2=new targets(370,250,30,30);
    target3=new targets(400,250,30,30);
    target4=new targets(430,250,30,30);
    target5=new targets(340,280,30,30);
    target6=new targets(370,280,30,30);
    target7=new targets(400,280,30,30);
    target8=new targets(430,280,30,30);
    target9=new targets(460,280,30,30);

    target10=new targets(800,160,30,30);
    fill("aquamarine");
    target11=new targets(770,190,30,30);
    target12=new targets(800,190,30,30);
    target13=new targets(830,190,30,30);
    target14=new targets(740,220,30,30);
    target15=new targets(770,220,30,30);
    target16=new targets(800,220,30,30);
    target17=new targets(830,220,30,30);
    target18=new targets(860,220,30,30);

    Engine.run(engine);
}
function draw(){
    background("grey");
textSize(20)
    text("Score:"+score,100,100)
    polygonObj.display();
    groundObj.display();
    slingObj.display();
    platform2.display();
    platform1.display();
    target1.display();
    target2.display();
    target3.display();
    target4.display();
    target5.display();
    target6.display();
    target7.display();
    target8.display();
    target9.display();
    target10.display();
    target11.display();
    target12.display();
    target13.display();
    target14.display();
    target15.display();
    target16.display();
    target17.display();
    target18.display();

    target1.score();
    target2.score();
    target3.score();
    target4.score();
    target5.score();
    target6.score();
    target7.score();
    target8.score();
    target9.score();
    target10.score();
    target11.score();
    target12.score();
    target13.score();
    target14.score();
    target15.score();
    target16.score();
    target17.score();
    target18.score();
  //  detectollision(polygonObj,target1);
  //detectollision(polygonObj,target2);
 // detectollision(polygonObj,mango3);
 // detectollision(polygonObj,mango4);
 // detectollision(polygonObj,mango5);
 // detectollision(polygonObj,mango6);
 // detectollision(polygonObj,mango7);
 // detectollision(polygonObj,mango8);
 // detectollision(polygonObj,mango9);
//detectollision(polygonObj,mango10);
  //detectollision(polygonObj,mango11);
 // detectollision(polygonObj,mango12);

}
function mouseDragged()
{
	Matter.Body.setPosition(polygonObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingObj.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    slingObj.attach(polygonObj.body);
    
	}
}
  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.width+lstone.width)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

