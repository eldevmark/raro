
var runrex
var ground2
var x
var ig
var rex
var fondo
function preload(){

fondo = loadImage("FONDO.jpg")
runrex = loadAnimation("trex1.png","trex3.png","trex4.png");
ground2 = loadImage("ground2.png")

}
function setup(){
  createCanvas(800,500);
  ig = createSprite (500,250)
 rex = createSprite(50,400,20,40);  
 rex.addAnimation ("run",runrex)
 rex.scale = 0.1;
  ig.visible =  true
  ig.addImage (fondo)
  x = createSprite(200,470,400,20)
  x.visible = false

}


function draw(){
  //establecer color de fondo.
  background(0);
  console.log (rex.y)
if(keyDown("w")){
 rex.velocityY = -20;
console.log ("haz precionado space")
}
//cuando acabe se regenera
if (ig.x <400){
  ig.x = ig.width /2
}
ig.velocityX = -4;
rex.collide (x);






rex.velocityY+= 0.5;
  
  drawSprites();
}
