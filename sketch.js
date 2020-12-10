const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var plinkos = [];
var particles = [];
var divisions = [];
var ground;
var divisionHeight = 300;

function setup() {
  createCanvas(500,750);
 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,720,500,10);

  for(var d = 0; d <= width; d=d+80){
      divisions.push(new Division(d, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var i = 20; i <= width; i=i+50){
      plinkos.push(new Plinko(i,60));
  }
  for(var i = 55; i <= width; i=i+50){
      plinkos.push(new Plinko(i,160));
  }
  for(var i = 20; i <= width; i=i+50){
      plinkos.push(new Plinko(i,260));
  }
  for(var i = 55; i <= width; i=i+50){
      plinkos.push(new Plinko(i,360));
  }
 

  Engine.run(engine);
}

function draw() {
  background(0);
  ground.display();
 
  for(var i = 0; i< plinkos.length; i++){
      plinkos[i].display();
  }
  for(var d = 0; d< divisions.length; d++){
      divisions[d].display();
  }
  if(frameCount%50===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
  for(var p = 0; p < particles.length; p++) {
      particles[p].display();
  }

  Engine.update(engine);
  drawSprites();
}