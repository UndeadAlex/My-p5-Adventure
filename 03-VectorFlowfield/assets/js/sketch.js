var inc = 0.1;
var vecScl = 10;
var cols, rows;

let canvasRef;

var zoff = 0;

let fr;
let button;

let particles = []

let flowfield;

function setup()
{
    canvasRef = createCanvas(600, 240);
    colorMode(HSB, 255);
    frameRate(144);

    cols = floor(width / vecScl);
    rows = floor(height / vecScl);

    flowfield = new Array(cols*rows);

    fr = createP('');
    button = createButton('Save Image');
    button.mousePressed(saveImage);

    for(var i = 0; i < 300; i++)
    {
        particles[i] = new Particle();
    }

    background(0);
}

function saveImage()
{
    saveCanvas(canvasRef, 'png');
}

function draw()
{
    // background(0,1);
    var yoff = 0;
    for(var y = 0; y < rows; y++)
    {
        var xoff = 0;
        for(var x = 0; x < cols; x++)
        {
            var index = x + y * cols;
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;

            xoff += inc;

            stroke(0, 50);

            // stroke(255, 50);
            // push();
            // translate(x * vecScl, y * vecScl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, vecScl, 0);
            // pop();
        }
        yoff += inc;

        zoff += 0.0003;
    }

    for(var i = 0; i < particles.length; i++)
    {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
    

    fr.html(floor(frameRate()));
}