function Component_Rotate()
{
	this.Owner = null;
	this.rotation = 0;
	this.Target = null;
}

Component_Rotate.prototype.attach = function()
{

}

Component_Rotate.prototype.detach = function()
{

}

Component_Rotate.prototype.update = function()
{
	this.rotation += 1;
	var rotationRads = this.rotation * (Math.PI / 180);
	
	
	this.Target.element.style.WebkitTransform= "rotate(" + rotationRads + "rad)";
	this.Target.element.style.MozTransform = "rotate(" + rotationRads + "rad)";
	this.Target.element.style.OTransform= "rotate(" + rotationRads + "rad)";
	this.Target.element.style.MsTransform= "rotate(" + rotationRads + "rad)";
}