const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg,dustbin;
var paper, launcher;

function preload() {
    backgroundImg = loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,344,1200,25);
    dustbin = new Dustbin(800,200);
    paper = new Paper(400,300);
    launcher = new Launcher(paper.body,{x:200,y:100});
}

function draw(){
    ground.display();
    background("red");
    Engine.update(engine);
    strokeWeight(4);
    
    paper.display();
    dustbin.display();
    launcher.display(); 
  
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}