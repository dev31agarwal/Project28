class Launcher{
    constructor(x, y){

        var options= {
            bodyA:x,
            pointB:y,
            stiffness: 0.004,
            length: 10

        }
        this.body= Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA=null;
    }

    attach(x){
        this.body.bodyA=x;  
    }
    display(){
        if(this.body.bodyA!=null){
            var pointA=this.body.bodyA.position;
            var pointB=this.body.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}