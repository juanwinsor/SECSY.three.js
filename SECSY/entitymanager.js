//entity manager singleton
var EntityManager = new function()
{
	//array of entities
	this.Entities = [];

	//create an entity and return a reference
	this.createEntity = function()
	{
		//create a new entity
		var entity = new Entity();
		//add entity to array
		this.Entities.push(entity);

		//return reference to new entity
		return entity;
	};

	//update all entities
	this.update = function()
	{
		for(i = 0; i < this.Entities.length; i++)
		{
			this.Entities[i].update();
		}
	};

	//delete entity
	this.deleteEntity = function(name)
	{
		for(i = 0; i < this.Entities.length; i++)
		{
			if(this.Entities[i].Name == name)
			{
				//delete an array element at current position
				this.Entities.splice(i, 1);
				return;
			}			
		}
		//return null if not found
		return null;
	};

	//retrieve an entity by name
	this.getEntity = function(name)
	{
		for(i = 0; i < this.Entities.length; i++)
		{
			if(this.Entities[i].Name == name)
			{
				//return the entity
				return this.Entities[i];
			}
		}
		//return null if not found
		return null;
	};
}