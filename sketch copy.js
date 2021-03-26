
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

function isTouching(object1,object2){

  if( object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2) {
     return true;
    }
  else {
    return false;
  }

}

function bounceOff(object1,object2){
if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
  object2.x - object1.x < object1.width/2 + object2.width/2){
    object1.velocityX=object1.velocityX*(-1)
    object2.velocityX=object2.velocityX*(-1)
  }
if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
  object2.y - object1.y < object1.height/2 + object2.height/2){
    object1.velocityY=object1.velocityY*(-1)
    object2.velocityY=object2.velocityY*(-1)


  }
}