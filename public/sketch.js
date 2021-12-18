var points = [];
var canvasSizeX = 800;
var canvasSizeY = 800;
var nDraws = 1000; // how many times draw is called

var angleSpeed = 0.005
function setup() {
  createCanvas(canvasSizeX, canvasSizeY);
  randomSeed(10); // Random seed 10 is pretty cool
  background(1, 1, 1, 1);

  var density = 60;
  var space = canvasSizeX / density;
  // looping through "points" in space
  for (var x = 0; x < canvasSizeX; x += density) {
    for (var y = 0; y < canvasSizeY; y += density) {
      var p = createVector(x, y);
      points.push(p);
    }
  }
  // avoids looping draw I think
  // noLoop();
}

var n = 0
function draw() {
  // Iterations for drawing
    
  
  // drawing no outline
  noStroke();
  // fill coler
  fill(255);
  // Loop through vectors

  for (var i = 0; i < points.length; i++) {
    // Angle at which each point will move
    var angle = map(noise(points[i].x * angleSpeed , points[i].y * angleSpeed), 0, 1, 0, 720);

    points[i].add(createVector(cos(angle), sin(angle)));
    // create a circle at each point
    ellipse(points[i].x, points[i].y, 2);
  }
  
    n++;
  if (n==nDraws){noLoop()}

}
