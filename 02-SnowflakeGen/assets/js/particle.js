class Particle
{
    constructor(x, y, r)
    {
        this.pos = createVector(x, y);
        this.r = r;
    }

    update()
    {
        this.pos.x -= 1;
        this.pos.y += random(-4, 4);

        let angle = this.pos.heading();
        angle = constrain(angle, 0, PI/6);
        let mag = this.pos.mag();
        this.pos = p5.Vector.fromAngle(angle);
        this.pos.setMag(mag);
    }

    draw()
    {
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }

    finished()
    {
        return (floor(this.pos.x) <= 0);
    }

    intersects(snowflake)
    {
        let result = false;
        for(let particle of snowflake)
        {
            let d = this.pos.dist(particle.pos);
            if(d < this.r*2)
            {
                result = true;
                break;   
            }
        }
        return result;
    }
}