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
			_H = (childtW/parentW)*childtH;
			var _top = (parentH - _H)/2;
			child.attr('style','width:' + parentW + ';top:' + _top);
		}else{
			var _W = (parentH/childtH)*childtW;
			var _left = (parentW - _W)/2;
			child.attr('style','height:' + parentH + ';left:' + _left);
		}
	};

});
