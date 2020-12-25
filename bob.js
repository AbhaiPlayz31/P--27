class Bob{

    constructor(x,y,r){
    
        var options ={
            isStatic : false,
            restitution: 1.0,
            friction: 0.5,
            density: 2.0
        }
    
    this.x = x;
    this.y = y;
    this.r = r;
    //this.image = loadImage("Doge.png");
    
    this.body = Bodies.circle(this.x, this.y, this.r/2, options)
    World.add(world, this.body);
    
    }
    
    
    display(){
        
        var angle = this.body.angle;

        var bobpos = this.body.position;
    
        push()
        translate(bobpos.x, bobpos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop()
    
    
    
    }
     
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    