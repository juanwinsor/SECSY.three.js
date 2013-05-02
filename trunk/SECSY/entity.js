function Entity()
{
	//component dictionary
	this.Components = new Array();
	
	this.ParentEntity = null;
	this.Name = "entityName";
	
	this.deleteList = new Array();
}

Entity.prototype.createChild = function()
{
	var child = EntityManager.CreateEntity();
	child.ParentEntity = this;
	
	return child;
};

Entity.prototype.update = function()
{
	//update all attached components
	for(var c in this.Components)
	{
		this.Components[c].update();
	}
	
	//delete all components flagged for deletion
	for (var i = 0; i < this.deleteList.length; i++) {
		this.Components[this.deleteList[i]].detach();
		delete this.Components[this.deleteList[i]];
	}
	
	this.deleteList = new Array();
	
};

Entity.prototype.addComponent = function(componentName)
{
	var component = null;
	//check if component type already exists, only one of each type is allowed
	if (this.Components[componentName] == null) {
		//instantiate a component by name
		component = new window[componentName]();
		//reference the owner of the component	
		component.Owner = this;
		//call its attach method to initialize the component
		component.attach();
	
		//add the component to the dictionary with its name as the key
		this.Components[componentName] = component;
	}
	else
	{
		component = this.Components[componentName];
	}
	return component;
};

Entity.prototype.getComponent = function(componentName)
{
	return this.Components[componentName];
}

Entity.prototype.deleteComponent = function(componentName)
{
	this.deleteList.push(componentName);
}

