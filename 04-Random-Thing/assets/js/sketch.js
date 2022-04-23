let ball;
let gravity;


function setup() 
{
    createCanvas(600, 600);

    gravity = createVector(0, 0.01);

    ball = new Ball(width/2, height/2, 16);
}

function draw() 
{
    background(18);

    ball.update();
    ball.draw();
}

