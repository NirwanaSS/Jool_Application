


// Job Seekers Registration

$(function(){
	$("#jS_Registration").submit(function(e){
		e.preventDefault();
		var  js_reg_email   = $("#js_reg_email").val();
		var  js_reg_pwd     = $("#js_reg_pwd").val();
		var  js_reg_cpwd    = $("#js_reg_cpwd").val();

		var jsonBody = {
			email1     :  js_reg_email,
			password1  :  js_reg_pwd,
			cpassword1 :  js_reg_cpwd
		};

		$.post("/jS_Registration", jsonBody, function(resMsg){
			console.log(resMsg);

		});
	});
});

// Job Seekers Login

$(function(){
	$("#jS_Login").click(function(e){
		e.preventDefault();
		var  js_login_email  = $("#js_login_email").val();
		var  js_login_pwd    = $("#js_login_pwd").val();
		
		var jsonBody = {
			email2    : js_login_email,
			password2 : js_login_pwd

		};

		$.post("/jS_Login", jsonBody, function(resMsg){
			console.log(resMsg);

		});
	});
});


// Recruiters Registration

$(function(){
	$("#re_Registration").click(function(e){
		e.preventDefault();
		var  re_reg_org       = $("re_reg_org").val();
		var  re_reg_name      = $("#re_reg_name").val();
		var  re_reg_email     = $("#re_reg_email").val();
		var  re_reg_pwd       = $("#re_reg_pwd").val();
		var  re_reg_cpwd      = $("#re_reg_cpwd").val();
		var  re_reg_phn       = $("#re_reg_phn").val();
		var  re_reg_desg      = $("#re_reg_desg").val();
		

		var jsonBody = {
			org         : re_reg_org,
			name3       : re_reg_name,
			email3      : re_reg_email,
			password3   : re_reg_pwd,
			cpassword3  : re_reg_cpwd,
			phone       : re_reg_phn,
			degn        : re_reg_desg,
			
		};

		$.post("/re_Registration", jsonBody, function(resMsg){
			console.log(resMsg);

		});
	});
});

// Recruiters Login

$(function(){
	$("#re_Login").click(function(e){
		e.preventDefault();
		var  re_login_email    = $("#re_login_email").val();
		var  re_login_pwd      = $("#re_login_pwd").val();
		
		var jsonBody = {
			email4    : re_login_email ,
			password4 : re_login_pwd

		};

		$.post("/re_Login", jsonBody, function(resMsg){
			console.log(resMsg);

		});
	});
});