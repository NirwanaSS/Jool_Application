$(document).ready(function(){
	$("#js_checkpassword").click(function(){
		$("#js_reg_cpwd").attr("type" , $(this).is(":checked") ? "text" : "password");
		$("#js_reg_pwd").attr("type" , $(this).is(":checked") ? "text" : "password");
		
	});
});

$(document).ready(function(){
	$("#re_checkpassword").click(function(){
		$("#re_reg_cpwd").attr("type" , $(this).is(":checked") ? "text" : "password");
		$("#re_reg_pwd").attr("type" , $(this).is(":checked") ? "text" : "password");
		
	});
});