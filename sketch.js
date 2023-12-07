function setup() {
  createCanvas(windowWidth, windowHeight);
  // y_segment = 12;
  // x_segment = 10;
  points = [];
  y_step = 20;
  w = y_step*3/4;


  for (let y = 0; y < height; y += y_step) {
    x_step = (width/8)*random()+5;
    for (let x = 0; x < width*2; x += x_step) {
      //two points push
      points.push({
        x: x,
        y: y,
        color: [250 * random()+100, 250 * random()+100, 250 * random()+100],
      });
      points.push({
        x: x,
        y: y,
        color: [250 * random(), 250 * random(), 250 * random()],
      });
    }
  }
  
  noLoop()
}

function draw() {
  background(200);
  // strokeに対して線形グラデ
  //strokeWeight(5);
  //strokeCap(SQUARE)
  noFill();
  for (let i = 0; i < points.length - 1; i++) {
    strokeWeight(w);
    if (points[i].y === points[i + 1].y) {
      let gradientStroke = drawingContext.createLinearGradient(
        points[i].x,
        points[i].y,
        points[i + 1].x,
        points[i + 1].y
      );

      gradientStroke.addColorStop(0, color(points[i].color));
      //gradientStroke.addColorStop(0.5, color(255, 255, 0));
      gradientStroke.addColorStop(1, color(points[i + 1].color));

      drawingContext.strokeStyle = gradientStroke;

      line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    }else{
      //w = y_step*3/4;
    }
    
    
  }
}
