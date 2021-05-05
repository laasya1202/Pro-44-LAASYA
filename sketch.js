var PLAY=1;
var END=0;
var gameState=PLAY;
var bg, bgimg,goImg,go;
var music,music2,bgmusic;
var btile,wtile;
var tilesGroup,tiles1Group;
var sc,edges;
var score = 0;
var anime;
var animeimg;
var yay;
var yayimg;
var milestone;
var backg;
function preload() {
 bgimg = loadImage("pianotilesbg1.png");
 music = loadSound("Song1.mp3");
 music2=loadSound("gameover.wav");
 bgmusic=loadSound("IDY.mp3");
 goImg=loadImage("go1.png")
 milestone=loadSound("Milestone.mp3");
yayimg=loadImage("yay.jpg")
 //animeimg=loadAnimation("pic1.jpg", "pic2.jpg", "pic3.jpg")
 //edges=createEdgeSprites();
}

function setup() {
  createCanvas(windowWidth,windowHeight);

 bg =  createSprite(width-800, height);
 bg.addImage("background",bgimg)
 bg.velocityY=2;
 bg.scale=2.5;
 go=createSprite(width/2-50, height/2)
 go.addImage("game over", goImg);
 //go.scale;
 btilesGroup = new Group();
 wtilesGroup=new Group();
 bgmusic.play(); 
 laxmanrekha=createSprite(600,800,595,20);
 laxmanrekha.visible=false;
// yay=createSprite(400, 400, 50, 50)
 //yay.addImage(" YAY", yayimg)
 //yay.scale = 0.2

 //go.depth=btilesGroup.depth;
 //go.depth=go.depth+1

}

function draw() {
 
 
 //score = score + Math.round(frameCount/60);
  if(gameState===PLAY)
  {
    background(0); 
    textSize(30)
    fill("white")
    text("Score :" +score, width-500, height-650)
  go.visible=false;
  //yay.visible = false;

    if(bg.y>400)
    {
  bg.y= bg.height/2
    }

  btiles();
  wtiles();

if(mousePressedOver(btile))
{
  music.play();
  btilesGroup.destroyEach(); 
  score=score+1;
 
}
if(score%100 === 0){
  milestone.play();
//yay.visible = true;
}
if(btilesGroup.isTouching(laxmanrekha))
  {
    gameState=END
    music2.play();
   
  }
  
}
else if(gameState===END)
{
    go.visible=true;
    bgmusic.pause();
    btilesGroup.setVelocityYEach(0);
    bg.velocityY=0;
    wtilesGroup.setVelocityYEach(0);
    //btilesGroup.destroyEach(); 
    //wtilesGroup.destroyEach(); 
    wtilesGroup.setLifetimeEach(-1);
    btilesGroup.setLifetimeEach(-1);
}

  drawSprites();

}


function btiles() {
  if(frameCount%50 === 0){
    btile = createSprite(random(width-600, width-1000), 50, 80, 140 )
    btile.velocityY =(12 + score/10);
    btile.shapeColor=("purple");
    btile.lifetime=800;
    btile.depth=go.depth;
    go.depth=go.depth+1
    btilesGroup.add(btile);

  }
  
}
function wtiles() {
   if(frameCount%20 === 0){ 
  
   
     wtile = createSprite(random(width-600, width-1000), 50, 80, 140) 
  wtile.velocityY =(10 + score/10); 
  wtile.shapeColor=("blue"); 
  wtile.lifetime=800;
  wtile.depth=go.depth;
    go.depth=go.depth+1
  wtilesGroup.add(wtile); 
 
}
 }
 /*function gameOver()
{
  //gameState=END;
 bgmusic.end();
  
} */
