class Rope{
    constructor(bodyA, bodyB, offsetX){
        this.offsetX = offsetX;
        
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x: this.offsetX, y:0}
        }
        
        //this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    

    display(){
        
        
            var A = this.rope.bodyA.position;
            var B = this.rope.bodyB.position;
            
            stroke("red");
            strokeWeight(4);
            
            line(A.x, A.y, B.x + this.offsetX, B.y);
            

            

        
    }
    
}