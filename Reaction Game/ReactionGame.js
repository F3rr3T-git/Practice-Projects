	
	var start = new Date().getTime();

	function rcolor()
	{

		var l = '0123456789ABCDEF'.split('');
		var c = '#';

		for(var i=0;i<6;i++)
		c += l[Math.floor(Math.random() * 16)]; 

		return c;

	}


	function makeShapeAppear()
	{

		var top = Math.random() * 400;
		var left = Math.random() * 400;
		var width = 100 + (Math.random() * 200);

		if (Math.random() > 0.5)
		{ document.getElementById("shape").style.borderRadius = "50%"; } 

		else 
		{ document.getElementById("shape").style.borderRadius = "0"; } 
				              
				         
		document.getElementById("shape").style.backgroundColor = rcolor();
		document.getElementById("shape").style.width = width + "px";
		document.getElementById("shape").style.height = width + "px";
		document.getElementById("shape").style.top = top + "px";
		document.getElementById("shape").style.left = left + "px";
		document.getElementById("shape").style.display = "block";

		start = new Date().getTime();

	}


	function delay()
	{ setTimeout(makeShapeAppear, Math.random * 2000); }



	delay();
		                    
	document.getElementById("shape").onclick = function()
	{
		            
		document.getElementById("shape").style.display = "none";
				        
		var end = new Date().getTime();
		var timeTaken = (end - start) / 1000;
				        
		document.getElementById("spn").innerHTML = timeTaken + "s";

		delay();              
				       
	}
