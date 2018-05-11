// Recruiters registration validation

$(function(){
	var name_error_message = $("#reReg_name_errMsg");
	var email_error_message = $("#reReg_email_errMsg");
	var cpassword_error_message = $("#reReg_cpwd_errMsg");
	var phone_error_message = $("#reReg_phone_errMsg");

	name_error_message.hide();
	email_error_message.hide();
	cpassword_error_message.hide();
	phone_error_message.hide();

	var error_name = false;
	var error_email = false;
	var error_phone = false;

	// Username Validation

	$("#re_reg_name").focusout(function(){
		var name_length = $("#re_reg_name").val().length;
		var is_name_valid = check_name(name_length);
		if(is_name_valid){
			name_error_message.hide();
			error_name = false;
		}else{
			name_error_message.html("Should be between 5-20 characters");
			name_error_message.show();
			error_name = true;
		} 

	});

	// Email Validation

	$("#re_reg_email").focusout(function(){
		var email = $("#re_reg_email").val();
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

	
	// Password validation

	$("#re_reg_cpwd").focusout(function(){
		var password = $("#re_reg_pwd").val();
		var cpassword = $("#re_reg_cpwd").val();
		var is_valid = check_cpassword(password,cpassword);
		if(is_valid){
			cpassword_error_message.hide();
			error_cpassword = false;	
		}else{
			cpassword_error_message.html("Password doesn't match");
			cpassword_error_message.show();
			error_cpassword = true;
		}
	});
	
 
    // Phone Number Validation

	$("#re_reg_phn").focusout(function(){
		var phone = $("#re_reg_phn").val();
		var is_phn_valid =check_phone(phone);
		if(is_phn_valid){
			phone_error_message.hide();
			error_phone = false;	
		}else{
			phone_error_message.html("Invalid phone number");	
			phone_error_message.show();	
			error_phone = true;
		}
	});



	// Form Submit Validation
	
	$("#re_Registration").submit(function(){
		
		if(error_name == false && error_email == false  && error_cpassword == false && error_phone == false){
			return true;
		} else{
			return false;
		}


	});

});