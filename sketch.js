var gameState=0;
var form,game;

function preload(){
  bgImg=loadImage("Images/road2.jpg");
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-10);
  game=new Game();
  game.start();
  //bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  //bg.addImage(bgImg);
  //bg.velocityY=2;
 
  //player1 = createSprite(400, 200, 50, 50);
  //player1.shapeColor="red";

}

function draw() {
  background(255);  
  text(mouseX+","+mouseY,50,50)
  
  //controlPlayer1();
  drawSprites();
}
function controlPlayer1(){
  if(keyDown(RIGHT_ARROW)){
    player1.x+=30;
  }
  if(keyDown(UP_ARROW)){
    player1.y+=-30;
  }
  if(keyDown(LEFT_ARROW)){
    player1.x+=-30;
  }
  /*if(keyDown(DOWN_ARROW)){
    player1.y+=30;
  }*/

}