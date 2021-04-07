// JavaScript Document

//validating the name when user insert value to form
function validator(){
	var name = document.getElementById("name").value;				//getting the input from from	
	var errormessage = document.getElementById("errormessage");
	var text;				//to display error message
	
	//checks the name length
	if (name.length<3){
		text = "Please enter an valid name";
		errormessage.innerHTML = text;
		document.getElementById("errormessage").style.background = "#FD4343";
		document.getElementById("errormessage").style.width = "30%";
		return (false);
		
		}else if(name.length>=2){
			text = "";
			errormessage.innerHTML = text;
			document.getElementById("errormessage").style.background = 'none';
			return (false);
		}
	return (false);
}

//validating user email when user insert value to form
function validator_mail(){
	var email = document.getElementById("email").value;					//getting the input from from			
	var errormessage = document.getElementById("errormessage");
	var text;
	
	var email_validator = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;		// varriable to check email address properties
	
	//checks the validity of mail
	if (email_validator.test(email) === false) {
		text = "Please enter an valid email";
		errormessage.innerHTML = text;
		document.getElementById("errormessage").style.background = "#FD4343";
		document.getElementById("errormessage").style.width = "30%";
		return (false);
		
	}else if (email_validator.test(email) === true){
		text = "";
		errormessage.innerHTML = text;
		document.getElementById("errormessage").style.background = 'none';
		return (false);
	}
	return (false);
}

//validation when user press submit button
function validate(){
	
	//getting the form input values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;

	var rateExecellent = document.getElementById("star5").checked;
	var rateVeryGood = document.getElementById("star4").checked;
	var rateGood = document.getElementById("star3").checked;
	var ratePoor = document.getElementById("star2").checked;
	var rateWorst = document.getElementById("star1").checked;
	
	//checking the star rating value
	var rate_value;
	if (document.getElementById('star1').checked) {
		rate_value = document.getElementById('star1').value;
	}else if (document.getElementById('star2').checked) {
		rate_value = document.getElementById('star2').value;
	}else if (document.getElementById('star3').checked) {
		rate_value = document.getElementById('star3').value;
	}else if (document.getElementById('star4').checked) {
		rate_value = document.getElementById('star4').value;
	}else if (document.getElementById('star5').checked) {
		rate_value = document.getElementById('star5').value;
	}
	
	var errormessage = document.getElementById("errormessage");		
	var text;															//to display error message
	var email_validator = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	
	//print error message when all input fields are empty
	if (name.length<3 && email_validator.test(email) === false && (rateExecellent === 0 && rateVeryGood === 0 && rateGood===0 && ratePoor===0 && rateWorst ===0)  ){
		text = "Please enter your Name, E-mail & Rating.";
		errormessage.innerHTML = text;
		document.getElementById("errormessage").style.background = "#FD4343";
		document.getElementById("errormessage").style.width = "50%";
		return (false);
		
	//checks rating
	}else if (rateExecellent === 0 && rateVeryGood === 0 && rateGood===0 && ratePoor===0 && rateWorst ===0){
			text = "Please rate our page";
			errormessage.innerHTML = text;
			document.getElementById("errormessage").style.background = "#FD4343";
			document.getElementById("errormessage").style.width = "30%";
			return (false);
		
	//checks name length
	}else if(name.length<3){
		text = "Please enter a valid name";
		errormessage.innerHTML = text;
		document.getElementById("errormessage").style.background = "#FD4343";
		document.getElementById("errormessage").style.width = "30%";
		return (false);
		
	//if all input fields are fill correctly response message will be shown in alert message
	}else{
		text = "";
		errormessage.innerHTML = text;
		document.getElementById("errormessage").style.background = 'none';
		if (subject.length === 0){
			alert ("Dear " + name + ", Thank you very much for your feedback. You have rated our site as " + rate_value + "." );
		}else{
			alert ("Dear " + name + ", Thank you very much for your feedback. You have rated our site as " + rate_value + " and your comment was " + subject +".");
		}
		//checks the rating value
		document.getElementById("name").value= "";
		document.getElementById("email").value = "";
		document.getElementById("subject").value = "";
		var ele = document.getElementsByName("rate");
		   for(var i=0;i<ele.length;i++)
			  ele[i].checked = false;
				return (false);
			}
	return (false);
}

//removes the error msg area when user input values correctly 
function startClick(){
	text = "";
	var errormessage = document.getElementById("errormessage");
	errormessage.innerHTML = text;
	document.getElementById("errormessage").style.background = 'none';
	return (false);
}