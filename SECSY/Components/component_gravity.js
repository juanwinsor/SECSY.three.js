//component template
function Component_Gravity()
{
	this.Owner = undefined;
	this.Acceleration = -9.81;
	this.Velocity = new THREE.Vector3(0, 0, 0);
	this.TerminalVelocity = -56;
}

Component_Gravity.prototype.attach = function()
{

}

Component_Gravity.prototype.detach = function()
{

}

Component_Gravity.prototype.update = function(deltaTime)
{
	this.Velocity.y += this.Acceleration * deltaTime;
	if(this.Velocity.y < this.TerminalVelocity)
	{
		this.Velocity.y = this.TerminalVelocity;
	}
	
	this.Owner.Position.y += this.Velocity.y * deltaTime;
	if(this.Owner.Position.y < 0) //this.Owner.getComponent("Component_BillboardSprite_Animated").Size.y/20)
	{
		this.Owner.Position.y = 0; // this.Owner.getComponent("Component_BillboardSprite_Animated").Size.y/20;		
	}
}