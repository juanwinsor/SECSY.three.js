function Component_Spotlight()
{
	this.Owner = undefined;
}

Component_Spotlight.prototype.attach = function()
{
	//create a light
	this.light = new THREE.SpotLight();	
	this.light.castShadow = true;
	//this.light.shadowCameraVisible = true;
	//this.light.angle = 0.52;
	CustomRenderer.addSceneObject(this.light);
};

Component_Spotlight.prototype.detach = function()
{
	CustomRenderer.deleteSceneObject(this.light);
};

Component_Spotlight.prototype.update = function(deltaTime)
{
	this.light.position.set(this.Owner.Position.x, this.Owner.Position.y, this.Owner.Position.z);
	return;
};