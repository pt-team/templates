$(function(){
	$('#loginform input').focus(function(){$(this).addClass('focusinput').removeClass('normalinput');})
	                     .blur(function(){$(this).addClass('normalinput').removeClass('focusinput');});

	autoImg('#sidebar');
	$(window).resize(function(){
		autoImg('#sidebar');
	});

	function autoImg(obj){
	    var parent = $(obj);
	    var child = $(obj).find('img');
	    var parentW = parseInt(parent.css('width'));
	    var parentH = parseInt(parent.css('height')); 
	    var childtW = parseInt(child.css('width'));
	    var childtH = parseInt(child.css('height'));
		var parent_scale = parentW/parentH;
		var child_scale = childtW/childtH;
		if(parent_scale >= child_scale){//
			child.attr('style','width:' + parentW);
		}else{
			child.attr('style','height:' + parentH);
		}
		
	}

});
