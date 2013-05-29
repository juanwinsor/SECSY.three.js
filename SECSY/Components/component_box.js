function Component_Box()
{
	this.Owner = undefined;
	
}

Component_Box.prototype.attach = function()
{
	this.cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshLambertMaterial({color: 0xFFFFFF}));
	this.cube.castShadow = true;
	this.cube.receiveShadow = true;
	//this.cube.position.y = 0.5;
	this.cube.useQuaternion = true;	

	CustomRenderer.addSceneObject(this.cube);

};

Component_Box.prototype.detach = function()
{
	CustomRenderer.deleteSceneObject(this.cube);
};

Component_Box.prototype.update = function(deltaTime)
{
	this.cube.quaternion = this.Owner.Rotation;
	return;
};