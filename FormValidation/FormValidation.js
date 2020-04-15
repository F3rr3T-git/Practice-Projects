
        $(document).ready(function(){
    

	function isEmail(email)
	{

		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
                return regex.test(email);
                
	}


	$("#submitbtn").click( function() 

	{
			var errormsg = "";
			var fieldMissing = "";

			if( $("#email").val() == "" )
			{	fieldMissing += "<br>Email"; }


			if( $("#phone").val() == "" )
			{ fieldMissing += "<br>Telephone"; }


			if( $("#password").val() == "" )
			{ fieldMissing += "<br>Password"; }


			if( $("#con-password").val() == "" )
			{ fieldMissing += "<br>Confirm Password"; }


			if( fieldMissing != "")
			{ errormsg += "<p>The following field(s) are missing:" + fieldMissing; }

			if( isEmail($("#email").val()) == false)
			{ errormsg +=  "<p>Your email address is not valid</p>"; }


			if( $.isNumeric($("#phone").val()) == false)
			{ errormsg +=  "<p>Your phone number is not numeric</p>"; }


			if( $("#password").val() != $("#con-password").val() )
			{ errormsg +=  "<p>Your passwords don't match</p>"; }


			if( errormsg != "" )
			{ $("#error").html(errormsg); }

			else 
			{
				$("#success").show();
				$("#error").hide();
			}


	});

});
