
var fixedRect , movingRect;


function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600,400,70,80);
  movingRect = createSprite(100,100,60,60);
  obj1 = createSprite(200,100,60,30)
  obj2 = createSprite(200,400,45,80)

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  obj1.velocityY=2
  obj2.velocityY=-2
}

function draw() {

  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,obj1)){
    obj1.shapeColor = "red";
    movingRect.shapeColor = "red";
    
  }
  else{
    obj1.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }

bounceOff(obj1,obj2)
  drawSprites();
 
}

