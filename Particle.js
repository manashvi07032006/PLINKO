class Particle {
    constructor(x,y,radius) {
      var options = {
        'isStatic':false,
        'restitution': 0.4,
        'density': 1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.color = color(random(0,225), random(0,225), random(0,225));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0 ,0 , this.radius, this.radius);
      pop();
    }
  };
