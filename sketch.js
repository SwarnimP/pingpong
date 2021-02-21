var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
    box1=createSprite(1,390,160,13);
    box1.shapeColor="yellow";
    box2=createSprite(200,390,155,13);
     box2.shapeColor="pink";
     box1=createSprite(1,390,160,13);
     box1.shapeColor="yellow";
     box1=createSprite(1,390,160,13);
     box1.shapeColor="yellow";
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
drawSprites();


    //add condition to check if box touching surface and make it box
}