function Component_Clock()
{
	this.Owner = null;
	this.Target = null;
	
	this.updateTime();
}

Component_Clock.prototype.attach = function()
{
	
}

Component_Clock.prototype.detach = function()
{

}

Component_Clock.prototype.update = function()
{
	//get the current time
	this.updateTime();
	
	//if a target is set, it will update the text of that target element
	if (this.Target != null) {
		this.Target.text = this.time;
	}
}


Component_Clock.prototype.updateTime = function()
{
	var currentDate = new Date();
	this.time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}