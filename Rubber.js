class Rubber{
	constructor(x,y,r)
	{
 	var options={
     'restitution':0.3,
	 'friction':5,
     'density':1
	}
	 this.body=Bodies.circle(x,y,10,options);
	 this.width=100;
	 this.height=40;
	 World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,80,80);
			pop()
	}

}