class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
          this.r = 8;
          this.plinko = Bodies.circle(x,y,this.r,options);
          World.add(world,this.plinko);
        }
   
       display(){
        var pos = this.plinko.position;
        var angle = this.plinko.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
