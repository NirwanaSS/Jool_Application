// Jobseeker login validation

$(function(){
	var email_error_message = $("#jsLogin_email_errMsg");
	email_error_message.hide();
	
	var error_email = false;
	
	$("#js_login_email").focusout(function(){
		var email = $("#js_login_email").val();
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

	
	
	$("#jS_Login").submit(function(){
        
		if(error_email == false ){
			return true;
		} else{
			return false;
		}


	});

});

