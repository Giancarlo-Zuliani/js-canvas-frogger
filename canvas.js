
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
    this.interval=setInterval(this.updateGameArea,30);
    t= new target();
    x= new target2();
    f = new frog();
  },
  updateGameArea:function(){
    t.update();
    x.update();
    f.update();
    t.x >= 600 ? t = new target : t.x++
    x.x >= 600 ? x = new target2() : x.x++
    gamearea.clear()
    t.draw();
    x.draw();
    f.draw(frogX,frogY);
  },
  clear:function(){
    gamearea.context.clearRect(0,0,gamearea.canvas.width,gamearea.canvas.height);
  }
};

function target(){
  this.y = 100;
  this.x=-100;
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
    this.x = this.x++;
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
