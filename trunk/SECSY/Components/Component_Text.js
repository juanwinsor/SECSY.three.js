//component template
function Component_Text()
{
	this.Owner = null;
	
	this.text = "";
	this.element = document.createElement('div');
	this.element.setAttribute("id", "textbox");
	viewport.appendChild(this.element);
}

Component_Text.prototype.attach = function()
{
	this.position = this.Owner.getComponent("Component_Transform");
}

Component_Text.prototype.detach = function()
{

}

Component_Text.prototype.update = function()
{
	this.element.innerHTML = this.text;
	if (this.position != null) {
		this.element.style.position = "absolute"
		this.element.style.top = this.position.y + "px";
		this.element.style.left = this.position.x + "px";		
	}
}