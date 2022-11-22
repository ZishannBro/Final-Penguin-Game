var bgimg
var bg
var penguin
var penguinimg
var obstacle1, obstacle2
var obstacle1img, obstacle2img
var edges
var bear
var ground
var END = 0
var PLAY = 1
var WIN = 2
var gameState = PLAY
var gameOver, restart
var score=0
function preload() {
  bgimg = loadImage("assets/bg2.jpg")
  penguinimg = loadImage("assets/penguin1.png")
  obstacle1img = loadImage("assets/obstacle1.png")
  obstacle2img = loadImage("assets/obstacle2.png")
  gameOverimg= loadImage("assets/gameOver.png")
  restartimg=loadImage("assets/restart.png")
}

function setup() {
  createCanvas(800, 400);
  bg = createSprite(400, 200, 800, 400)
  bg.addImage(bgimg)
  penguin = createSprite(50, 380, 35, 35)
  penguin.addImage(penguinimg)
  penguin.scale = 1.3
  obstacle1Group = new Group()
 // obstacle2Group = new Group()
 // edges=createEdgeSprites()
  ground=createSprite(400,390,800,20)
  ground.visible=false
  penguin.debug=true
  penguin.setCollider("circle",0,0,20)
  gameOver = createSprite(400,100)
  gameOver.addImage(gameOverimg)
  restart = createSprite(550,140)
  restart.addImage(restartimg)
  gameOver.scale = 0.5
  restart.scale=0.1
  gameOver.visible = false
  restart.visible=false
  score=0
}

function draw() {
  background(255);
  if (gameState===PLAY) {
    bg.velocityX = -2
  if (bg.x < 300) {
    bg.x = bg.width / 2
  }0
  if (keyDown("space")) {
   penguin.velocityY=-5
  }
   penguin.velocityY=penguin.velocityY+0.5
  createObstcale()
  if (obstacle1Group.isTouching(penguin)) {
    gameState = END
  }
  if(frameCount%100==0){
    score=score+1
  }
  }
  else if (gameState===END){
    gameOver.x=camera.position.x
    restart.x=camera.position.x
    gameOver.visible=true
    restart.visible=true
    penguin.velocityY=0
    bg.velocityX=0
    obstacle1Group.setVelocityXEach(0)
    obstacle1Group.setLifetimeEach(-1)
    if (mousePressedOver(restart)) {
      reset()
    }
  }
  

  penguin.collide(ground)
  drawSprites();

  textSize(20)
  stroke(3)
  fill("red")
  text("Score:"+ score, camera.position.x,50)

}
function reset(){
  gameState=PLAY
  gameOver.visible=false
  restart.visible=false
  penguin.visible=true
  obstacle1Group.destroyEach()
  score=0
}
function createObstcale() {
  if (frameCount % 100 == 0) {
    obstacle1 = createSprite(800, 370)
    var rand = Math.round(random(1, 2))
    if (rand == 1) {
      obstacle1.addImage(obstacle1img)
    } else {
      obstacle1.addImage(obstacle2img)
    }
    //obstacle1.addImage("obstacle1",obstacle1img)
    obstacle1.scale = 0.5
    // obstacle2=createSprite(600,350)
    // obstacle2.addImage("obstacle2",obstacle2img)
    obstacle1.lifetime=300
    obstacle1Group.add(obstacle1)
    // obstacle2Group.add(obstacle2)
    //obstacle1.lifetime = 50
    obstacle1Group.setVelocityXEach(-3)
  }
}
 






