function Component_Sway()
{
	this.Owner = undefined;
	
}

Component_Sway.prototype.attach = function()
{
	return;
};

Component_Sway.prototype.detach = function()
{
	return
};

Component_Sway.prototype.update = function(deltaTime)
{	
	this.Owner.Position.x += (Math.sin(Time.totalTime) * 0.0004);
	return;
};