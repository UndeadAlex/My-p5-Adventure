class Ball
{
    constructor(x, y, r)
    {
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.size = r;
    }

    update()
    {
        this.intersects(mouseX, mouseY, this.size);
    }

    draw()
    {
        fill(255);
        noStroke();

        circle(this.pos.x, this.pos.y, this.size);
    }

    intersects(otherX, otherY, size)
    {
        // 
        //
        //
        //
        //
        //


        if(false)
        {
            console.log("Yes");
        }
    }
}