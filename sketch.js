function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);

  // Move the canvas so it's inside our <div id="sketch_holder">.
  canvas.parent('sketch_holder');

  background(0, 0, 0);
  c1 = color(random(0,200),random(0,200), 0);
  c2 = color(0, random(0,200), random(0,200));
}

function draw() {
  setGradient(0,0,windowWidth,windowHeight,c1,c2);
  
}

function setGradient(x, y, w, h, c1, c2) {
  var angle=atan2(h,w);
  stepX=w/1500;
  stepY=h/1500;
  strokeW=sqrt(w*w+h*h)/1500/2;

  push();
  for(var i=0;i<1500;i++){
    translate(stepX,stepY);
    push();
    rotate(angle);
    var inter=i/1500;
    var c=lerpColor(c1,c2,inter);
    stroke(c,0.000001);
    noFill();
    strokeWeight(strokeW);
    line(0,-1000,0,1000);
    pop();
    
  }
  pop();
}

function mouseMoved(){
 var grid=30; 
 x=floor((mouseX+random(-grid*2,grid*2))/grid)*grid;
 y=floor((mouseY+random(-grid*2,grid*2))/grid)*grid;
 type=floor(random(0,10));
 r=floor(random(1,3))*grid;
 stroke(255,255,255);
 strokeWeight(1.5);
 noFill();
 console.log(type);
 if(type==0){
   line(x-grid,y,x+grid,y);
 };

 if(type==1){
   line(x,y-grid,x,y+grid);
 };

 if(type==2){
  
   arc(x,y,r,r,0,HALF_PI);
 };

 if(type==3){

   arc(x,y,r,r,0,-HALF_PI);
 };   

 if(type==4){
 
   arc(x,y,r,r,HALF_PI,PI);
 };  

 if(type==5){
 
   arc(x,y,r,r,-HALF_PI,-PI);
 };  

 if(type==6){
 
   arc(x,y,r,r,0,PI);
 };  

 if(type==7){
 
   arc(x,y,r,r,HALF_PI,PI+HALF_PI);
 };

 if(type==8){

   arc(x,y,r,r,-PI,0);
 };

 if(type==9){
 
   arc(x,y,r,r,-HALF_PI,HALF_PI);
 };
}

function mouseClicked(){
  background(0, 0, 0);
  c1 = color(random(0,200),random(0,200), 0);
  c2 = color(0, random(0,200), random(0,200));
  
}
