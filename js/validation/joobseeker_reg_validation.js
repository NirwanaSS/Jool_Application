// Jobseeker registration validation

$(function(){ 
    
    //Email Validation
    var email_error_message = $("#jsReg_email_errMsg");
	email_error_message.hide();	
	var error_email = false;	


	$("#js_reg_email").focusout(function(){
		var email = $("#js_reg_email").val();
		var is_email_valid = check_email(email);

		if(is_email_valid){
			email_error_message.hide();
			error_email = false;	
		}else{
			email_error_message.html("Invalid email address");	
			email_error_message.show()
			error_email = true;
		}
	});

	

    // Password Validation
    
    var cpassword_error_message = $("#jsReg_cpwd_errMsg");
	cpassword_error_message.hide();
	var error_cpassword = false;

	$("#js_reg_cpwd").focusout(function(){
		var password = $("#js_reg_pwd").val();
		var cpassword = $("#js_reg_cpwd").val();
		var is_pwd_valid = check_cpassword(password,cpassword);
		if(is_pwd_valid){
			cpassword_error_message.hide();
			error_cpassword = false;	
		}else{
			cpassword_error_message.html("Password doesn't match");
			cpassword_error_message.show();
			error_cpassword = true;
		}
	});
	
    // Form Submit Validation
    
	$("#jS_Registration").submit(function(){

		
		if(error_email == false && error_cpassword == false){
			return true;
		} else{
			return false;
		}


	});

});


