function main(){
	//create a new entity
	var timePanel = EntityManager.createEntity();
	timePanel.Name = "time";
	
	//add a transform component for x,y position properties
	var positionComponent = timePanel.addComponent("Component_Transform");
	positionComponent.x = 500;
	positionComponent.y = 150;
	
	//add a text component to write the clock to
	var textComponent = timePanel.addComponent("Component_Text");
	//register a click event to the text box, jquery dependency
	$(textComponent.element).click(function()
	    {
		alert("time clicked");
	    });
	
	//add the clock component
	var clockComponent = timePanel.addComponent("Component_Clock");
	//the clock is dependent on a text component to write to
	clockComponent.Target = textComponent;
	
	//add the sine wave component
	timePanel.addComponent("Component_Sine");
	
	//add the rotation component
	var rotateComponent = timePanel.addComponent("Component_Rotate");
	rotateComponent.Target = textComponent;
}