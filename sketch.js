var gameState=0;
var playerCount,database,form,player,game;
var player1,player2,players;
var player1image,player2image;
var bg
var allplayers
var p1punch,p2punch;
var punch1,punch2;

function preload() {
player1image=loadImage("p1.PNG");
player2image=loadImage("p2.PNG");
bg=loadImage("backgroud.jpg");
p1punch=loadImage("p1 punch.png");
p2punch=loadImage("p2 puch.png");

}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount===2){
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
}