//component template
function Component_Controller()
{
	this.Owner = undefined;
	this.LeftPressed = false;
	this.RightPressed = false;
	this.UpPressed = false;
	this.DownPressed = false;
	this.JumpPressed = false;
	this.MoveVelocity = 2;
}



//events
Component_Controller.prototype.keyDown = function(e)
{
	
}

Component_Controller.prototype.attach = function()
{
	//store a reference to the component instance to be accessed in the event functions
	//the events are attached to document body so 'this' is a reference to the document body inside the function scope
	var component = this;
	
	$(document.body).on('keydown', function(e)
		{
			e.preventDefault();
			switch(e.which)
			{
				case 65: //left - a
					component.LeftPressed = true;						
					break;
				case 68: //right - d
					component.RightPressed = true;
					break;
				case 87: //up - w
					component.UpPressed = true;
					break;				
				case 83: //down - s
					component.DownPressed = true;
					break;
				case 32: //jump - space
					component.JumpPressed = true;
					break;
			}
		});
		
	$(document.body).on('keyup', function(e)
			    {
				e.preventDefault();
				switch(e.which)
				{					
					case 65: //left arrow
						component.LeftPressed = false;
						break;
					case 68: //right arrow
						component.RightPressed = false;
						break;
					case 87: //up - w
						component.UpPressed = false;
						break;				
					case 83: //down - s
						component.DownPressed = false;
						break;
				}
			    });
}

Component_Controller.prototype.detach = function()
{

}

Component_Controller.prototype.update = function(deltaTime)
{
	if(this.LeftPressed)
	{
		this.Owner.Position.x -= this.MoveVelocity * deltaTime;
	}
	if(this.RightPressed)
	{
		this.Owner.Position.x += this.MoveVelocity * deltaTime;
	}
	if(this.UpPressed)
	{
		this.Owner.Position.z -= this.MoveVelocity * deltaTime;
	}
	if(this.DownPressed)
	{
		this.Owner.Position.z += this.MoveVelocity * deltaTime;
	}
	if(this.JumpPressed)
	{
		this.Owner.getComponent("Component_Gravity").Velocity.y = 3;
		this.JumpPressed = false;
	}
	
	//check if character is moving out of camera bounds to follow player
	if(this.Owner.Position.x > (CustomRenderer.Camera.position.x + 1.5))
	{
		CustomRenderer.Camera.position.x = this.Owner.Position.x - 1.5;
		CustomRenderer.Camera.lookAt(new THREE.Vector3(CustomRenderer.Camera.position.x, 0.84, CustomRenderer.Camera.position.z - 1));
	}
	if(this.Owner.Position.x < (CustomRenderer.Camera.position.x - 1.5))
	{
		CustomRenderer.Camera.position.x = this.Owner.Position.x + 1.5;
		CustomRenderer.Camera.lookAt(new THREE.Vector3(CustomRenderer.Camera.position.x, 0.84, CustomRenderer.Camera.position.z - 1));
	}
	//check of player is moving out of z bounds of the path
	if(this.Owner.Position.z > 0)
	{
		this.Owner.Position.z = 0;		
	}
	if(this.Owner.Position.z < -3)
	{
		this.Owner.Position.z = -3;
	}
}