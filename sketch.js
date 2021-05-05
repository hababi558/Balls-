//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var ball,ballImg;
var groundUp, groundDown, grounndRight, groundleft
var newUp,newLeft
var platform, plt1, plt2, plt3, plt4, plt5, plt6, plt7
var platformImg, plt1Img, plt2Img, plt3Img, plt4Img, plt5Img, plt6Img, plt7Img
var enemy,enemiesGroup,enemyImg
var backgroundImg;
var spike,spike1,spike2,spikeImg
var redSpike,redSpike1,redSpike2,redSpikeImg
var gameOverImg,GameOver;
var GameState = "END"
var score = 0


function preload(){
ballImg = loadImage("player.png")
enemyImg = loadImage("enemy.png")
backgroundImg = loadImage("background.png")
platformImg = loadImage("platform.png")
plt1Img = loadImage("plt1.png")
plt2Img = loadImage("plt2.png")
plt3Img = loadImage("plt2.png")
plt5Img = loadImage("plt5.png") 
plt6Img = loadImage("plt6.png")
plt7Img = loadImage("plt7.png")
spikeImg = loadImage("spike.png")
redSpikeImg = loadImage("red spike.png")
gameOverImg = loadImage("GameOver.png")
}

function setup(){
 createCanvas(1400,700)

 // engine = Engine.create(30,30);
 // world = engine.world;

  ball = createSprite(700,350,10,10)
  ball.shapeColor=("red")
  ball.addImage(ballImg);
  
  camera.x=ball.x
  camera.y=ball.y


  groundDown = createSprite(700,730,1400,100)
  groundUp = createSprite(700,-30,1400,100)
  groundleft = createSprite(0,350,40,700)
  grounndRight = createSprite(1400,350,40,700)
  newLeft = createSprite(-100,350,40,1400)
  newUp = createSprite(700,-200,2000,20)

  platform = createSprite(200,200,100,230)
  platform.addImage(platformImg)

  plt1=createSprite(350,500,150,100)
  plt1.addImage(plt1Img)

  plt2=createSprite(1200,340,100,130)
  plt2.addImage(plt2Img)

  plt3=createSprite(500,200,100,200)
  plt3.addImage(plt3Img)

  plt4=createSprite(700,400,500,20)
  plt4.shapeColor="blue"

  plt5=createSprite(1200,600,100,100)
  plt5.addImage(plt5Img)

  plt6=createSprite(900,200,300,100)
  plt6.addImage(plt6Img)

  plt7=createSprite(700,600,80,80)
  plt7.addImage(plt7Img)

  spike = createSprite(1300,200,30,30)
  spike.addImage(spikeImg)

  spike1 = createSprite(100,600,30,30)
  spike1.addImage(spikeImg)

  spike2 = createSprite(700,100,30,30)
  spike2.addImage(spikeImg)

 redSpike = createSprite(100,100,30,30)
redSpike.addImage(redSpikeImg);

enemiesGroup= new Group();

GameOver = createSprite(10000,10000)
GameOver.addImage(gameOverImg)
 

 
 
}
function draw(){
  background(backgroundImg)
 
  ball.velocityY = ball.velocityY = +5

  textSize(30)
  text("score :"+score,1200,100)

  if (keyDown("enter")){



 
  spike.velocityX = spike.velocityX = -5
  spike.velocityY = spike.velocityY = -5

  spike1.velocityX = spike1.velocityX = +5
  spike1.velocityY = spike1.velocityY = +5

  spike2.velocityX = spike2.velocityX = -5
  spike2.velocityY = spike2.velocityY = +5

  redSpike.velocityX = redSpike.velocityX = +5
  redSpike.velocityY = redSpike.velocityY = -5

  

  }

  if (keyDown("space")){
    ball.velocityY=-6

    camera.x=ball.x
    camera.y=ball.y

  }  

  if (keyDown("a")){
    ball.velocityX = ball.velocityX = -6

    camera.x=ball.x
    camera.y=ball.y

  }else
  {
    ball.velocityX=ball.velocityX = 0
  }

  if (keyDown("d")){
    ball.velocityX = ball.velocityX = +6

    camera.x=ball.x
    camera.y=ball.y

  }else
  {
   
  }

  if (ball.isTouching(platform)){
    ball.x=700
    ball.y=350
  }

  if (ball.isTouching(plt1)){
    ball.x=700
    ball.y=350
  }

  if (ball.isTouching(plt2)){
    ball.x=700
    ball.y=350
  }

  if (ball.isTouching(plt3)){
    ball.x=700
    ball.y=350
  }

  if (ball.isTouching(plt5)){
    ball.x=700
    ball.y=350
  }

  if (ball.isTouching(plt6)){
    ball.x=700
    ball.y=350
  }

  if (ball.isTouching(plt7)){
    ball.x=700
    ball.y=350
  }

 

  if(spike.isTouching(grounndRight)){
    spike.bounceOff(grounndRight)
  }

  if(spike.isTouching(groundUp)){
    spike.bounceOff(groundUp)
  }

  if(spike.isTouching(groundDown)){
    spike.bounceOff(groundDown)
  }

  if(spike.isTouching(groundleft)){
    spike.bounceOff(groundleft)
  }

  
  if(spike.isTouching(platform)){
    spike.bounceOff(platform)
  }

  if(spike.isTouching(plt1)){
    spike.bounceOff(plt1)
  }

  if(spike.isTouching(plt2)){
    spike.bounceOff(plt2)
  }

  if(spike.isTouching(plt3)){
    spike.bounceOff(plt3)
  }

  if(spike.isTouching(plt4)){
    spike.bounceOff(plt4)
  }

  if(spike.isTouching(plt5)){
    spike.bounceOff(plt5)
  }

  if(spike.isTouching(plt6)){
    spike.bounceOff(plt6)
  }

  if(spike.isTouching(plt7)){
    spike.bounceOff(plt7)
  }
 

  if(spike2.isTouching(grounndRight)){
    spike2.bounceOff(grounndRight)
  }

  if(spike2.isTouching(groundUp)){
    spike2.bounceOff(groundUp)
  }

  if(spike2.isTouching(groundDown)){
    spike2.bounceOff(groundDown)
  }

  if(spike2.isTouching(groundleft)){
    spike2.bounceOff(groundleft)
  }

  if(spike2.isTouching(platform)){
    spike2.bounceOff(platform)
  }

  if(spike2.isTouching(plt1)){
    spike2.bounceOff(plt1)
  }

  if(spike2.isTouching(plt2)){
    spike2.bounceOff(plt2)
  }

  if(spike2.isTouching(plt3)){
    spike2.bounceOff(plt3)
  }

  if(spike2.isTouching(plt4)){
    spike2.bounceOff(plt4)
  }

  if(spike2.isTouching(plt5)){
    spike2.bounceOff(plt5)
  }

  if(spike2.isTouching(plt6)){
    spike2.bounceOff(plt6)
  }

  if(spike2.isTouching(plt7)){
    spike2.bounceOff(plt7)
  }

  
  if(spike1.isTouching(grounndRight)){
    spike1.bounceOff(grounndRight)
  }

  if(spike1.isTouching(groundUp)){
    spike1.bounceOff(groundUp)
  }

  if(spike1.isTouching(groundDown)){
    spike1.bounceOff(groundDown)
  }

  if(spike1.isTouching(groundleft)){
    spike1.bounceOff(groundleft)
  }

  if(spike1.isTouching(platform)){
    spike1.bounceOff(platform)
  }

  if(spike1.isTouching(plt1)){
    spike1.bounceOff(plt1)
  }

  if(spike1.isTouching(plt2)){
    spike1.bounceOff(plt2)
  }

  if(spike1.isTouching(plt3)){
    spike1.bounceOff(plt3)
  }

  if(spike1.isTouching(plt4)){
    spike1.bounceOff(plt4)
  }

  if(spike1.isTouching(plt5)){
    spike1.bounceOff(plt5)
  }

  if(spike1.isTouching(plt6)){
    spike1.bounceOff(plt6)
  }

  if(spike1.isTouching(plt7)){
    spike1.bounceOff(plt7)
  }

  //redSpike

  if(redSpike.isTouching(grounndRight)){
    redSpike.bounceOff(grounndRight)
  }

  if(redSpike.isTouching(groundUp)){
    redSpike.bounceOff(groundUp)
  }

  if(redSpike.isTouching(groundDown)){
    redSpike.bounceOff(groundDown)
  }

  if(redSpike.isTouching(groundleft)){
    redSpike.bounceOff(groundleft)
  }

  if(redSpike.isTouching(platform)){
    redSpike.bounceOff(platform)
  }

  if(redSpike.isTouching(plt1)){
    redSpike.bounceOff(plt1)
  }

  if(redSpike.isTouching(plt2)){
    redSpike.bounceOff(plt2)
  }

  if(redSpike.isTouching(plt3)){
    redSpike.bounceOff(plt3)
  }

  if(redSpike.isTouching(plt4)){
    redSpike.bounceOff(plt4)
  }

  if(redSpike.isTouching(plt5)){
    redSpike.bounceOff(plt5)
  }

  if(redSpike.isTouching(plt6)){
    redSpike.bounceOff(plt6)
  }

  if(redSpike.isTouching(plt7)){
    redSpike.bounceOff(plt7)
  }

  if (ball.isTouching(spike)){
    GameOver.x = ball.x
    GameOver.y = ball.y

    ball.destroy()
       }

  if (ball.isTouching(spike1)){
    GameOver.x = ball.x
    GameOver.y = ball.y
    ball.destroy()

       }

  if (ball.isTouching(spike2)){
    GameOver.x = ball.x
    GameOver.y = ball.y

    ball.destroy()

       }

  if (ball.isTouching(redSpike)){
    GameOver.x = ball.x
    GameOver.y = ball.y

    ball.destroy()
     
  }

  
  enemiesGroup.bounceOff(groundDown);
  enemiesGroup.bounceOff(newUp);
  enemiesGroup.bounceOff(grounndRight);
  enemiesGroup.bounceOff(newLeft);
  enemiesGroup.bounceOff(platform);
  enemiesGroup.bounceOff(plt1);
  enemiesGroup.bounceOff(plt2);
  enemiesGroup.bounceOff(plt2);
  enemiesGroup.bounceOff(plt3);
  enemiesGroup.bounceOff(plt4);
  enemiesGroup.bounceOff(plt5);
  enemiesGroup.bounceOff(plt6);
  enemiesGroup.bounceOff(plt7);



  if (ball.isTouching(enemiesGroup)){
    score = +10
    enemiesGroup.destroyEach()
  }

  if (score == 1000){

    textSize(50)
    fill("white")
    text("YOU WON", 700,350)

  }

  ball.collide(groundDown);
  ball.collide(groundUp);
  ball.collide(grounndRight);
  ball.collide(groundleft);
  ball.collide(plt4)
  ball.setCollider("circle",-5,4,15)
  spike.setCollider("circle",0,0,25)
  spike1.setCollider("circle",0,0,25)
  spike2.setCollider("circle",0,0,25)
  redSpike.setCollider("circle",0,0,25)
  


  spike.debug=true;
  ball.debug = true;
  
 // spike.setCollider()
  spawnenemy();
  drawSprites()
}


function spawnenemy() {
  if(frameCount % 160 === 0) {
    var enemy = createSprite(Math.random(800,1200),Math.random(600,800),20,20);
    enemy.shapeColor="green"
    enemy.addImage(enemyImg)
    
    
  enemy.debug = true;
  enemy.setCollider("circle",0,0,15)
    
    //generate random obstacles

enemy.velocityX = 6

enemy.velocityY =-6

    /*switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }*/
    
    //assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.5;
    //obstacle.lifetime = 300;
    //add each obstacle to the group


    
  enemiesGroup.add(enemy);
  }
}