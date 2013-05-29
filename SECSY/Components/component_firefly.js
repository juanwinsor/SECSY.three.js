function Component_Firefly()
{
	this.Owner = undefined;
	
	//pick a random axis direction
	var negX = (Math.random() > 0.5) ? 1 : -1;
	var negY = (Math.random() > 0.5) ? 1 : -1;
	//pick a random vector direction
	this.direction = new THREE.Vector2(negX * Math.random(), negY * Math.random());
	
	this.decisionTimer = Time.totalTime + (Math.random() * 5);
}

Component_Firefly.prototype.attach = function()
{
	return;
};

Component_Firefly.prototype.detach = function()
{
	return
};

Component_Firefly.prototype.update = function(deltaTime)
{	
	this.Owner.Position.x += this.direction.x * Time.deltaTime;
	this.Owner.Position.y += this.direction.y * Time.deltaTime;
	
	if (Time.totalTime > this.decisionTimer) {
		this.decisionTimer = Time.totalTime + (Math.random() * 5);
		
		if (this.Owner.Position.y > 10) {
			this.direction.y = -1;
		}
		else if (this.Owner.Position.y < -3) {
			this.direction.y = 1;
		}
		else
		{
			var negY = (Math.random() > 0.5) ? 1 : -1;
			this.direction.y = negY * Math.random();
		}
		
		if (this.Owner.Position.x < -7) {
			this.direction.x = 1;
		}
		else if (this.Owner.Position.x > 7) {
			this.direction.x = -1;
		}
		else
		{
			//pick a new direction
			//pick a random axis direction
			var negX = (Math.random() > 0.5) ? 1 : -1;
			
			//pick a random vector direction
			this.direction.x = negX * Math.random();
		}
		
		
	}
	
	return;
};