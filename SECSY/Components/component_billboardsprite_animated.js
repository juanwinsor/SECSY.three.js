//component template
function Component_BillboardSprite_Animated()
{
	this.Owner = undefined;
	this.Size = new THREE.Vector2(1, 1);
}

Component_BillboardSprite_Animated.prototype.attach = function()
{	
	//create the billboard
	var planeGeometry = new THREE.PlaneGeometry(this.Size.x, this.Size.y, 1, 1);	
	var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
	this.Billboard =  new THREE.Mesh(planeGeometry, planeMaterial);
	this.Billboard.castShadow = true;
	this.Billboard.receiveShadow = true;
	
	CustomRenderer.addSceneObject(this.Billboard);	
}

Component_BillboardSprite_Animated.prototype.detach = function()
{
	CustomRenderer.deleteSceneObject(this.Billboard);
}

Component_BillboardSprite_Animated.prototype.update = function(deltaTime)
{
	this.Billboard.position = this.Owner.Position;
	//if(this.Billboard.position.y < this.Size.y / 2)
	//{
	//	this.Billboard.position.y = this.Size.y / 2;	
	//}
	this.Billboard.rotation = new THREE.Vector3(1.57, 0, 0);
}

Component_BillboardSprite_Animated.prototype.setImage = function(image, size)
{
	this.Size = size;
	
	//delete old billboard
	CustomRenderer.deleteSceneObject(this.Billboard);
	//change material
	var planeMaterial = new THREE.MeshBasicMaterial( { map: image, wireframe: false, transparent: true } );
	var planeGeometry = new THREE.PlaneGeometry(size.x, size.y, 1, 1);
	this.Billboard =  new THREE.Mesh(planeGeometry, planeMaterial);
	
	this.Billboard.receiveShadow = true;
	CustomRenderer.addSceneObject(this.Billboard);	
}