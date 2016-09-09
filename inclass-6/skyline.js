'use strict'

var createApp = function(canvas) { 
	var c = canvas.getContext("2d");

	// Create the ground




	var floor = canvas.height/2
	var grad = c.createLinearGradient(0,floor,0,canvas.height)
	grad.addColorStop(0, "green")
	grad.addColorStop(1, "black")
	c.fillStyle=grad
	c.fillRect(0, floor, canvas.width, canvas.height)
    
    
	var ctx = canvas.getContext("2d");
	var carPosition = canvas.width;
	var carAnimate = setInterval(function(){  

	//draw the car
	ctx.beginPath();
	ctx.clearRect(0,canvas.height*4/6,canvas.width,canvas.height*1/6);
	c.fillStyle=grad
	c.fillRect(0, floor, canvas.width, canvas.height)
	ctx.fillStyle = "yellow";
	ctx.fillRect(carPosition,canvas.height*3/4,canvas.width/10,0-canvas.height/20);
	ctx.arc(carPosition,canvas.height*3/4,10,0,Math.PI*2,true);
	ctx.fillStyle = "black";
    ctx.fill();
    ctx.arc(carPosition+canvas.width/10,canvas.height*3/4,10,0,Math.PI*2,true);
    ctx.fill();
	if (carPosition < 0  ) {
	carPosition=canvas.width;
	}
          carPosition -= canvas.width/1000; 
	},10);


	//draw the sun
    var sunPosition=0
    var sunAnimate = setInterval(function(){  
	c.clearRect(0,0,canvas.width,canvas.height/20);

	c.beginPath();
	c.arc(sunPosition,canvas.height/40,canvas.height/40,0,Math.PI*2);
	c.fillStyle = "red";
    c.fill();
	if (sunPosition > canvas.width  ) {
	sunPosition=0
	}
          sunPosition += canvas.width/800; 
	},10);



	// common size for windows
	var windowSpacing = 2, floorSpacing = 3
	var windowHeight = 5, windowWidth = 3

	// colors of buildings
	var blgColors = [ 'red', 'blue', 'gray', 'orange'] 

	

	var build = function() { 
		var x0 = Math.random()*canvas.width
		var blgWidth = (windowWidth+windowSpacing) * Math.floor(Math.random()*10)
		var blgHeight = Math.random()*(canvas.height/2-canvas.height/20)

		c.fillStyle= blgColors[ Math.floor(Math.random()*blgColors.length)]
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight)
		c.fillStyle="yellow"
		for (var y = floor - floorSpacing; y > floor - blgHeight; y -= floorSpacing + windowHeight) {
			for (var x = windowSpacing; x < blgWidth - windowWidth; x += windowSpacing + windowWidth) {
				var light=Math.random()
				if (light>=0.5)
				{
					c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
			}
			}
		}
	}

	return {
		build: build
	}
}

window.onload = function() {
	var app = createApp(document.querySelector("canvas"))
	
	document.getElementById("build").onclick = app.build

}


