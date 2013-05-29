function Component_RotateY()
{
	this.Owner = undefined;
	
}

Component_RotateY.prototype.attach = function()
{
	return;
};

Component_RotateY.prototype.detach = function()
{
	return
};

Component_RotateY.prototype.update = function(deltaTime)
{
	var incrementQ = new THREE.Quaternion();
	incrementQ.setFromEuler(new THREE.Vector3(0, 10.0 * deltaTime, 0))
	this.Owner.Rotation.multiplySelf(incrementQ);
	return;
};