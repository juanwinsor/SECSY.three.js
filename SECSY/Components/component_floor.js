//component template
function Component_Floor()
{
	this.Owner = undefined;	
}

Component_Floor.prototype.attach = function()
{	
	//create the floor
	var planeGeometry = new THREE.PlaneGeometry(50, 16, 1, 1);	
	var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
	this.Floor =  new THREE.Mesh(planeGeometry, planeMaterial);
	
	this.Floor.receiveShadow = true;
	CustomRenderer.addSceneObject(this.Floor);
	
	
}

Component_Floor.prototype.detach = function()
{
	CustomRenderer.deleteSceneObject(this.Floor);
}

Component_Floor.prototype.update = function(deltaTime)
{
	this.Floor.position = this.Owner.Position;
	//this.Billboard.rotation = new THREE.Vector3(1.57, 0, 0);
}