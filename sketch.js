const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    ground1 = new Ground;
    block1=new Block(300,200,30,40)
 

}

function draw(){
    background(0);
    Engine.update(engine);
    
   
   ground1.display();
    block1.display();
    
}
