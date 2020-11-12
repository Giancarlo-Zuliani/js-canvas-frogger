
function startGame(){
  gamearea.start();
}

 var size = 20;

var gamearea = {
  canvas:document.createElement('canvas'),
  start : function(){
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas , document.body.childNodes[0]);
    this.interval=setInterval(this.updateGameArea,80);
    t= new target();
    f = new frog();
  },
  updateGameArea:function(){
    t.update();
    f.update();

    gamearea.clear()
    t.draw();
    f.draw(frogX,frogY);
    checkCollision();
  },
  clear:function(){
    gamearea.context.clearRect(0,0,gamearea.canvas.width,gamearea.canvas.height);
  }
};

function target(){
  this.y = 300;
  this.x=300;
  this.draw = function(){
    gamearea.context.fillStyle = "green";
    gamearea.context.fillRect(this.x,this.y,size,size);
  };
  this.update= function(){
    this.x = this.x++;
  };
}

function target2(){
  this.y = 300;
  this.x= -100;
  this.draw = function(){
    gamearea.context.fillStyle = "green";
    gamearea.context.fillRect(this.x,this.y,size,size);
  };
  this.update= function(){
    this.x = this.x;
  };
}
var frogX = 300;
var frogY = 580

function frog(){
  this.x = frogX ;
  this.y= frogY;

  this.draw = function(x,y){
    gamearea.context.fillStyle = 'blue';
    gamearea.context.fillRect(frogX,frogY,size,size);
  }
  this.move = function(dir){
    gamearea.context.fillStyle = 'blue';
    switch(dir){
      case  'R' :
        frogX += 5;
        gamearea.context.fillRect(frogX , frogY ,size,size);
        break;

      case 'L' :
      frogX -= 5;
        gamearea.context.fillRect(frogX,frogY,size,size);
        break;

      case 'UP' :
       frogY-=5;
        gamearea.context.fillRect(frogX,frogY,size,size);
        break;

      case 'DOWN':
      frogY+=5;
      gamearea.context.fillRect(frogX,frogY,size,size);
      break;
    }
  }
  this.update = function(){
    this.x = this.x;
    this.y = this.y;
  }
}

window.addEventListener('keydown' ,onKeyDown,false);

function onKeyDown(evt){
  let keycode = event.keyCode;
    switch(keycode){
    case 68:
      f.move('R');
      break;
    case 83:
      f.move('DOWN');
      break;
    case 65:
      f.move('L');
      break;
    case 87 :
      f.move('UP');
      break;
  }
}
var allx=[];
var alltarget=[];

function checkCollision(){
  allx =[];
  for(i=0 ; i < 200;i++){
    let x = { Y : frogY+i , X :frogX+i};
    allx.push(x);
  }
  alltarget =[]
  for(i=0 ; i < 20; i++){
    let y = {Y:t.y+i , X : t.x+i};
    alltarget.push(y);
  }
    for(i=0;i<allx.length;i++){
    for(j=0;j<alltarget.length;j++){
      if(alltarget[j].X === allx[i].X  && alltarget[j].Y === allx[i].Y){
        console.log('collision detected');
      }
    }
  }
}
