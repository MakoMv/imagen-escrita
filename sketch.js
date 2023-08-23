function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  if(mouseIsPressed){
    fill(200)
  }else{
    fill(120)
  }
  background(254,255,220);
  ellipse(mouseX,mouseY,50,50)
}