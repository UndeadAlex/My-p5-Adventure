let currentParticle;
let snowflake = [];

const particleSize = 2;
let particleXDist = 0;
let particleYDist = 0;

function setup()
{
    createCanvas(600, 600);

    particleXDist = width/2;

    currentParticle = new Particle(particleXDist, particleYDist, particleSize);
}

let complete = false;
function draw()
{
    background(0);
    translate(width/2, height/2);
    rotate(PI/6);

    while (!currentParticle.finished() && !currentParticle.intersects(snowflake))
    {
        currentParticle.update();
    }

    if(snowflake.length >= 400)
    {
        complete = true;
    }

    if(!complete)
    {
        snowflake.push(currentParticle);
        currentParticle = new Particle(particleXDist, particleYDist, particleSize);
    }

    let segs = 6;
    for(let i = 0; i < segs; i++)
    {
        rotate(PI / (floor(segs / 2)));
        currentParticle.draw();
        for (let particle of snowflake)
        {
            particle.draw();
        }

        push();
        scale(1, -1);
        currentParticle.draw();
        for (let particle of snowflake)
        {
            particle.draw();
        }
        pop();
    }   
}