function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("black");
    fill("#9C27B0");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  