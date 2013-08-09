$(function(){
	$('#password').keyup(function(){
		var len = $(this).val().length;
		if(len != 0) $(this).siblings('label').hide();
		else $(this).siblings('label').show();
	});
    setTop();
	$(window).resize(function(){ setTop();	});
});
function setTop(){
	var H = document.body.clientHeight;
	var marginTop = (H>186)?(H - 186)/2:10;
	console.log(marginTop);
	$('#login-wrapper').css('margin-top',marginTop);
}