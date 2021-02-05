class Stone{
    constructor(x, y, radius){

        var options={
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body= Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius=radius;
        this.image=loadImage("stone.png");
    }

    display(){
        var pos= this.body.position
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*2, this.radius*2 )
    }
}