var Bits=[];

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);

  // Move the canvas so it's inside our <div id="sketch_holder">.
  canvas.parent('sketch_holder');

  background(0);
  c1 = color(random(0,200),random(0,200), 0);
  c2 = color(0, random(0,200), random(0,200));
}

function draw() {
  setGradient(0,0,windowWidth,windowHeight,c1,c2);
//background(0);
for (var i = 0; i < Bits.length; i++) {
  Bits[i].update();
}
if(Bits.length>0){

  if(Bits[Bits.length-1].life<0){
    Bits.pop();
  }

}
console.log(Bits.length);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function setGradient(x, y, w, h, c1, c2) {
  var angle=atan2(h,w);
  var step=ceil(sqrt(h*h+w*w));
  stepX=w/step;
  stepY=h/step;
  strokeW=1;

  push();
  for(var i=0;i<step;i++){
    translate(stepX,stepY);
    push();
    rotate(angle);
    var inter=i/step;
    var c=lerpColor(c1,c2,inter);
    stroke(c);
    noFill();
    strokeWeight(strokeW);
    line(0,-1000,0,1000);
    pop();
    
  }
  pop();
}

function mouseMoved(){
  Bits.unshift(new Bit());
}

function mouseClicked(){
  background(0, 0, 0);
  c1 = color(random(0,200),random(0,200), 0);
  c2 = color(0, random(0,200), random(0,200));
}

function Bit() {
 this.grid=30; 
 this.x=floor((mouseX+random(-this.grid*2,this.grid*2))/this.grid)*this.grid;
 this.y=floor((mouseY+random(-this.grid*2,this.grid*2))/this.grid)*this.grid;
 this.type=floor(random(0,10));
 this.r=floor(random(1,3))*this.grid;
 this.life=20;
 
 //console.log(type);
 
}

Bit.prototype.update=function(){
  this.life--;
  stroke(255,255,255,map(this.life,30,0,100,0));
  strokeWeight(1.5);
  noFill();
  if(this.type==0){
   line(this.x-this.grid,this.y,this.x+this.grid,this.y);
 };

 if(this.type==1){
   line(this.x,this.y-this.grid,this.x,this.y+this.grid);
 };

 if(this.type==2){

   arc(this.x,this.y,this.r,this.r,0,HALF_PI);
 };

 if(this.type==3){

   arc(this.x,this.y,this.r,this.r,0,-HALF_PI);
 };   

 if(this.type==4){

   arc(this.x,this.y,this.r,this.r,HALF_PI,PI);
 };  

 if(this.type==5){

   arc(this.x,this.y,this.r,this.r,-HALF_PI,-PI);
 };  

 if(this.type==6){

   arc(this.x,this.y,this.r,this.r,0,PI);
 };  

 if(this.type==7){

   arc(this.x,this.y,this.r,this.r,HALF_PI,PI+HALF_PI);
 };

 if(this.type==8){

   arc(this.x,this.y,this.r,this.r,-PI,0);
 };

 if(this.type==9){

   arc(this.x,this.y,this.r,this.r,-HALF_PI,HALF_PI);
 };
}
