
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
  for(i=0 ; i < size ;i++){
    let rightside = { Y : frogY+i , X :frogX};
    let upperside = {Y: frogY, X : frogX + i}
    let leftside = {Y:frogY+i ,X : frogX + size}
    let bottomside = {Y:frogY+size , X :frogX + i}
    allx.push(rightside);
    allx.push(upperside);
    allx.push(leftside);
    allx.push(bottomside);
   }
  alltarget =[]
  for(i=0 ; i < size ; i++){
    let rightside = { Y : t.y + i , X :t.x};
    let upperside = {Y: t.y, X : t.x + i}
    let leftside = {Y:t.y + i ,X : t.x + size}
    let bottomside = {Y:t.y + size , X :t.x+ i}
    alltarget.push(rightside);
    alltarget.push(leftside);
    alltarget.push(upperside);
    alltarget.push(bottomside);
  }
  alltarget.forEach((item) =>{
    allx.forEach((ele) =>{
      if(item.X === ele.X && item.Y === ele.Y){
        console.log('collision detected')
      }
    })
  })
}
