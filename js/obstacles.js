class Obstacle{
  constructor(x,y,width,height,speed,type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.type = type;
  }
  draw(){
    ctx.fillStyle ='blue';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
  update(dir){
    if(dir === 'right'){
      this.x +=this.speed * gameSpeed;
      if(this.x > canvas.width + this.width){
        this.x = 0 - this.width;
      }
    }else if (dir === 'left'){
      this.x -= this.speed *gameSpeed;
      if(this.x === 0 - this.width){
        this.x = canvas.width + this.width;
      }
    }
  }
}


function initObstacles(){
  for(i=0;i< 2;i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height-grid*2-20,grid*2,grid-10,1,'car'));
  }
  for(i=0;i<2;i++){
    let x = i*300;
    carsArray.push(new Obstacle(x,canvas.height-grid*3-20,grid*2,grid,1,'car',))
  }
}


initObstacles();

function handObstacles(){
  for(i=0 ; i < 2;i++){
    carsArray[i].update('right');
    carsArray[i].draw();
  }
  for(i=2;i<4;i++){
    carsArray[i].update('left')
    carsArray[i].draw();
  }
}
