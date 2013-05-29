//three.js renderer singleton
var CustomRenderer = new function()
{
	this.initialize = function(width, height)
	{
		//setup scene
		this.scene = new THREE.Scene();
		//setup camera
		this.camera = new THREE.PerspectiveCamera(35, width / height, 1, 1000);
		this.camera.position.z = 10;
		this.camera.position.x = 0;
		this.camera.position.y = 1.2;
		//var camLook = new THREE.Vector3(this.scene.position.x, this.scene.position.y, this.scene.position.z);
		//this.camera.lookAt(camLook);
		
		//setup renderer
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setSize(width, height);
		//this.renderer.shadowMapEnabled = true;
		document.body.appendChild(this.renderer.domElement);

		//this.renderer.setClearColorHex(0xEEEEEE, 1.0);
		//this.renderer.setClearColor({'r':1, 'g':0, 'b':0});
		//this.renderer.clear();
		
		
		
		

		

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
		this.renderer.render(this.scene, this.camera);
	};
		
}