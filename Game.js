class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
      if(gameState===0){
         player=new Player();
         var playerCountRef=await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
           playerCount=playerCountRef.val();
           player.getCount();
         }
         form=new Form();
         form.display();
      }
      player1=createSprite(600,displayHeight-250);
      player1.addImage(player1image);
      player1.scale=1.0;
      punch1=createSprite(600,displayHeight-250);
      punch1.addImage(p1punch);
      punch1.scale=1.0;
      punch1.visible=false;
      player2=createSprite(1000,displayHeight-250);
      player2.addImage(player2image);
      player2.scale=1.5;
      punch2=createSprite(1000,displayHeight-250);
      punch2.addImage(p2punch);
      punch2.scale=1.5;
      punch2.visible=false;
      players=[player1,player2];
      
    }
  play(){
  form.hide();
  Player.getPlayerInfo();
  if(allplayers!==undefined){
    background("red");
    image(bg,0,0,displayWidth,displayHeight);
    var index=0;
    var x=175;
    var y
    for(var i in allplayers){
      index=index+1;
     //x=x+500;
    // y=displayHeight-allplayers[i].distance;
      
    //players[index-1].x=x;
    //players[index-1].y=y;
      
    
    
  }
  //if( keyDown(RIGHT_ARROW)){
    //players[index-1].shapeColor="red"
    //camera.position.x=displayWidth/2;
    //camera.position.y=players[index-1].y
    //allplayers[i].x=allplayers[i].x+10;
    //player.update();
    //}
  //if(keyDown(LEFT_ARROW) && player.index!==null){
  // player.distance=player.distance+10 
    //player.update();
   //}
   if(keyDown(LEFT_ARROW)){
   player1.x=player1.x-10;
   } 
   if(keyDown(RIGHT_ARROW)){
    player1.x=player1.x+10;
    } 
    if(keyDown(UP_ARROW)){
      player2.x=player2.x-10;
      } 
      if(keyDown(DOWN_ARROW)){
       player2.x=player2.x+10;
       } 
if(keyDown("space")){
  punch1.visible=true;
  player1.visible=false;
}
if(keyDown("enter")){
  punch2.visible=true;
  player2.visible=false;
}


  drawSprites()
}

}
}