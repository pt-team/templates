$(function(){
	$('#loginform input').focus(function(){$(this).addClass('focusinput').removeClass('normalinput');})
	                     .blur(function(){$(this).addClass('normalinput').removeClass('focusinput');});
	// $('input').bind('click',function(){ 
	// 	$('#loginTip,#forgotPWD').show();

	// });

});
