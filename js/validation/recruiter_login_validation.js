// Recruiter login validation

$(function(){
	var email_error_message = $("#reLogin_email_errMsg");
	email_error_message.hide();
	
	var error_email = false;
	
	$("#re_login_email").focusout(function(){
		var email = $("#re_login_email").val();
		var is_valid = check_email(email);
		if(is_valid){
			email_error_message.hide();
			error_email = false;	
		}else{
			email_error_message.html("Invalid email address");	
			email_error_message.show();	
			error_email = true;
		}
	});

	

	$("#re_login").submit(function(){

		alert(error_email);	
		if(error_email == false ){
			return true;
		} else{
			return false;
		}


	});

});
