
var bullet,wall;
var speed,weight, thickness;



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  // Assigning random values
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,80); 

  // creating the bullet
  bullet = createSprite(50,200,30,10);
  bullet.shapeColor = color(255, 255, 255);

  // creating the wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  

  bullet.velocityX = speed;
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage >10)
    {
      wall.shapeColor = color(255,0,0);
    }
   
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
    
  }
 drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}