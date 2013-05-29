//three.js renderer singleton
var CustomRenderer = new function()
{
	this.initialize = function(width, height)
	{

		//setup renderer
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setSize(width, height);
		this.renderer.shadowMapEnabled = true;

		document.body.appendChild(this.renderer.domElement);

		this.renderer.setClearColorHex(0xEEEEEE, 1.0);
		this.renderer.clear();

		//setup camera
		this.Camera = new THREE.PerspectiveCamera(35, width / height, 1, 1000);
		this.Camera.position.z = 1.3;
		this.Camera.position.x = 0;
		this.Camera.position.y = 1.2;
		

		//setup scene
		this.scene = new THREE.Scene();

		var camLook = new THREE.Vector3(this.scene.position.x, this.scene.position.y + 0.7, this.scene.position.z);
		this.Camera.lookAt(camLook);

	};
	
	this.addSceneObject = function(sceneObject)
	{
		this.scene.add(sceneObject);
	};

	this.deleteSceneObject = function(sceneObject)
	{
		this.scene.remove(sceneObject);
	};

	this.render = function()
	{
		//this.Camera.lookAt(this.scene.position);
		this.renderer.render(this.scene, this.Camera);
	};
		
}