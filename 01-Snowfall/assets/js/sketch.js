let snow = [];
const snowCount = 400;
let gravity;

let spritesheet;
let snowFlakeTextures = [];

function preload()
{
    spritesheet = loadImage("assets\\img\\flakes32.png")
}

function setup()
{
    let screenW = width = window.innerWidth;
    let screenH = height = window.innerHeight;

    let snowCalc = floor((width / height) * 400);

    console.log(snowCalc);

    createCanvas(screenW, screenH);

    for(let x = 0; x < spritesheet.width; x += 32)
    {
        for(let y = 0; y < spritesheet.height; y += 32)
        {
            let img = spritesheet.get(x, y, 32, 32);
            snowFlakeTextures.push(img);
        }
    }

    gravity = createVector(0, 0.03);

    for(let i = 0; i < snowCount; i++)
    {
        let x = random(width);
        let y = random(height);
        let design = random(snowFlakeTextures);

        snow.push(new Snowflake(x, y, design));
    }
}

function draw()
{
    background(0);
    // if(snow.length < snowCount) // Don't want it to go too far.
    // {
    //     snow.push(new Snowflake());
    // }

    for (flake of snow)
    {
        flake.applyForce(gravity);
        flake.update();
        flake.draw();
    }

    // for(let i = snow.length-1; i >= 0; i--)
    // {
    //     if(snow[i].offScreen())
    //     {
    //         snow.splice(i, 1);
    //     }
    // }
}