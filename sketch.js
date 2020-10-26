var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1400,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  wall=createSprite(1300,200,thickness,height/2)

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
 
}

function draw() {
  background(0);
  
 if(hascollided(bullet,wall)){
   bullet.velocityX=0
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if (damage>10){
     wall.shapeColor="green"
   }
   if(damage<10){
     wall.shapeColor="red"
   }
 }
  drawSprites();
}