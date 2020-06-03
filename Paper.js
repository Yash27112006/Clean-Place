class Paper {
    constructor(x,y) {
        var options = {
            'restitution':1,
            'friction':0.9,
            'density':0.7
        }
      this.body = Bodies.rectangle(x,y,1,1,options);
      this.width = 50;
      this.height = 50;      
      this.x = x;
      this.y = y;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    
  
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  }
      
