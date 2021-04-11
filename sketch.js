const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, rand;
var ground, side1, side2, side3, side4;
var particles = [];
var divisions = [];
var plinkos = [];

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 780, 800, 20);
  side1 = new Ground(240, 0, 800, 20);
  side2 = new Ground(480, 400, 20, 800);
  side3 = new Ground(240, 800, 800, 20);
  side4 = new Ground(0, 400, 20, 800);

  for(var i = 0; i <=480; i+=80){
    divisions.push(new Division(i, 650, 10, 300));
  }

  for(var y = 60; y<=460; y= y+160){
    for(var i = 40; i<=460; i=i+50){
      plinkos.push(new Plinko(i, y, 10, 300));
    }
  }

  for(var y = 140; y<=460; y= y+160){
    for(var i = 60; i<=460; i=i+60){
      plinkos.push(new Plinko(i, y, 10, 300));
    }
  }
  
}

function draw(){
  background("black");
  Engine.update(engine)  ;
  rand = Math.round(random(100, 380));
  if(frameCount%90 === 0){
    particles.push(new Particle(rand, 15, 10));
  }
  for(var j = 0; j<divisions.length; j++ ){
    divisions[j].display();
  }

  for(var j = 0; j<plinkos.length; j++ ){
    plinkos[j].display();
  }
  for(var j = 0; j<particles.length; j++ ){
    particles[j].display();
  }
  
  ground.display();
  stroke("red");
  fill("red");
  side1.display();
  side2.display();
  side4.display();
  side3.display();
}
