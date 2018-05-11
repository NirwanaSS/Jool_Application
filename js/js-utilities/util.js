

// check the validity of email address

function check_email(email){

	//var pattern = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	var pattern = new RegExp(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com|@yahoo\.com$/i);
	return pattern.test(email);

}
// check the matching of password

function check_cpassword(password,cpassword){
	
	if(password != cpassword){
		return false;
	}else{
		return true;
	}	

}

// check the validity of phone 

function check_phone(phone){

	var pattern = new RegExp(/\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/);
	return pattern.test(phone);

}		

// check the validity of username

function check_name(name_length){

	if(name_length < 5 || name_length > 20){
		return false;
	}else{
		return true;
	}
}



