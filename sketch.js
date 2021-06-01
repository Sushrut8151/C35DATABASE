var hypoBall,database,position,hypoballPosition;

function setup(){
    database = firebase.database();
    

    createCanvas(500,500);
    hypoBall = createSprite(250,250,10,10);
    hypoBall.shapeColor = "red";
    hypoballPosition = database.ref('ball/position');
    hypoballPosition.on("value",readPosition,showError);
    
}

function draw(){
    background("white");
     if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
     }
     else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
     }
     else if(keyDown(UP_ARROW)){
        writePos(0,-1);
     }
     else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
     }


    drawSprites();
}

function writePos(a,b){
    console.log("hello");
  database.ref('ball/position').set({
      'x': position.x + a,
      'y': position.y + b
      
  })
}
function readPosition(data){
    position = data.val();
    hypoBall.x = position.x;
    hypoBall.y = position.y;
}
function showError(){
    console.log("Error in updating the value");
}
