//component template
function Component_Sine()
{
	this.Owner = null;
}

Component_Sine.prototype.attach = function()
{
	this.position = this.Owner.getComponent("Component_Transform");
	//this.displayPosition = {};
	this.lastSine = 0;
	this.lastSine2 = 0;
}

Component_Sine.prototype.detach = function()
{

}

Component_Sine.prototype.update = function()
{
	if (this.position != null) {
		var sine = Math.sin(Time.totalTime * 8);
		var sineDiff = sine - this.lastSine;
		
		this.position.y += sineDiff  * 100;
		
		var sine2 = Math.sin(Time.totalTime);
		var sineDiff2 = sine2 - this.lastSine2;
		this.position.x += sineDiff2  * 100;
		
		this.lastSine = sine;
		this.lastSine2 = sine2;
	}
}