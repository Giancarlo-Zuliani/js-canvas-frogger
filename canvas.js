
function startGame(){
  gamearea.start();
}

 var size = 20;

var gamearea = {
  canvas:document.createElement('canvas'),
  start : function(){
    this.canvas.width = 1200;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas , document.body.childNodes[0]);
    this.interval=setInterval(this.updateGameArea,50);
    t= new target();
    x= new target2();
  },
  updateGameArea:function(){
    t.update();
    x.update()
    t.x >= 900 ? t = new target : t.x++
    x.x >=900 ? x = new target2() : x.x++
    gamearea.clear()
    t.draw();
    x.draw();
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
  this.x= -1000;
  this.draw = function(){
    gamearea.context.fillStyle = "green";
    gamearea.context.fillRect(this.x,this.y,size,size);
  };
  this.update= function(){
    this.x = this.x++;
  };
}
