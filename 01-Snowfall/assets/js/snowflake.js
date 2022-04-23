function getRandSize()
{
    // let r = pow(random(0.1, 1), 10);
    // return r * 36;

    let r = randomGaussian() * 2;
    return constrain(abs(r*r), 2, 36);
}


class Snowflake
{
    constructor(sx, sy, tex) 
    {
        let x = sx || random(width);
        let y = sy || random(-height - 10, -10);

        this.tex = tex;

        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();

        this.size = getRandSize();
    }

    applyForce(force)
    {
        // Parallax Effect [ slow > fast ]
        // let f = force.copy();
        // f.mult(this.size);

        this.acc.add(force);
    }

    offScreen()
    {
        return this.pos.y > height + this.size;
    }

    reset()
    {
        let x = random(width);
        let y = random(-height - 10, -10);

        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();

        this.size = getRandSize();
    }

    update()
    {
        
        this.vel.add(this.acc);
        this.vel.limit(this.size * 0.2);

        if(this.vel.mag() < 1)
        {
            this.vel.normalize();
        }

        this.pos.add(this.vel);
        this.acc.mult(0);

        if(this.offScreen())
        {
            this.reset();
        }
    }

    draw()
    {
        if(this.tex === undefined)
        {
            stroke(255);
            strokeWeight(this.size);
            point(this.pos.x, this.pos.y);
        }
        else
        {
            imageMode(CENTER);
            image(this.tex, this.pos.x, this.pos.y, this.size, this.size);
        }

    }
}