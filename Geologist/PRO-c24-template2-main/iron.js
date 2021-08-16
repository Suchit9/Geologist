class Iron{
	constructor(x,y,width,height){

	// assign options to the rubber ball
	var option={
		restitution:0.8,
		friction:3,
		density:30
	}
    this.body = Bodies.rectangle(x,y,width,height,option);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
}
display(){
	var pos =this.body.position;
	push()
	translate(pos.x, pos.y);
	rectMode(CENTER)
	strokeWeight(4);
	stroke("purple");
	fill("yellow");
	//draw the ellipse here to display the rubber ball
	rect(0,0,this.width,this.height);
	pop()


}







}