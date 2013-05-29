function Component_Particle_Fire()
{
	this.Owner = undefined;
}

Component_Particle_Fire.prototype.attach = function()
{
	//create a light
	//this.light = new THREE.SpotLight();	
	//this.light.castShadow = true;
	//CustomRenderer.AddSceneObject(this.light);
	
	//create a particle geomtry object
	this.particleCount = 128;
	this.particles = new THREE.Geometry();
	var particleMaterial = new THREE.ParticleBasicMaterial({ color: 0xFFFFFF, size: 1, map: THREE.ImageUtils.loadTexture("images/fire.png"), blending: THREE.AdditiveBlending, transparent: true });
	
	//alert("test");
	
	for(var p = 0; p < this.particleCount; p++)
	{		
		//create a particle
		var particle = new THREE.Vector3( Math.random() * 0.5 - 0.25,  Math.random() * 1, Math.random() * 0.5 - 0.25); //THREE.Vertex(new THREE.Vector3(10, 10, 10));
		particle.velocity = new THREE.Vector3(0, 1, 0);
		//add it to the geometry		
		this.particles.vertices.push(particle);
	}
	this.particleSystem = new THREE.ParticleSystem(this.particles, particleMaterial);
	this.particleSystem.sortParticles = true;
	CustomRenderer.addSceneObject(this.particleSystem);	
};

Component_Particle_Fire.prototype.detach = function()
{
	CustomRenderer.deleteSceneObject(this.particleSystem);
};

Component_Particle_Fire.prototype.update = function(deltaTime)
{
	//this.light.position.set(this.Owner.Position.x, this.Owner.Position.y, this.Owner.Position.z);
	//return;
	//this.particleSystem.rotation.y += 0.01;
	//this.Owner.Position.x = Math.sin(deltaTime * 360);

	for(var i = 0; i < this.particleCount; i++)
	{
		var particle = this.particles.vertices[i];
		
		//offset the positions by the particlesystem position so particles are relative		
		if(particle.y > 1 + (Math.random() * 1))
		{
			//alert(particle.y);
			particle.x = (Math.random() * 0.5) - 0.25;			
			particle.y = (Math.random() * 1);
			particle.z = (Math.random() * 0.5) - 0.25;
		}
		
		//particle.addSelf(particle.velocity * deltaTime * );
		particle.y += (particle.velocity.y * deltaTime);
		
		//particle.x = this.particleSystem.position.x
		//particle.y = this.particleSystem.position.y
		//particle.z = this.particleSystem.position.z
	}
	this.particleSystem.geometry.__dirtyVertices = true;
	this.particleSystem.position = this.Owner.Position;
};