$(function(){
	var MsgRequest = [];
		MsgRequest[0] = '';
		MsgRequest[1] = '* 密码不要为空呀亲-_-!';
		MsgRequest[2] = '* 太少啦~ 密码不能少于6个字符哦亲';
		MsgRequest[3] = '* 密码不能含有空格哦亲~(╯▽╰)';
		MsgRequest[4] = '* 两个密码不一致';
	var	result = true,
		tipsspeed = 200;
	var _password = _confirmpassword = '';

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

	$('#password').focus(function(){$(this).addClass('focusinput').removeClass('normalinput');})
	              .blur(function(){$(this).addClass('normalinput').removeClass('focusinput');pwdCheck(this);//密码验证
	});
  	$('#confirmpassword').focus(function(){$(this).addClass('focusinput').removeClass('normalinput');})
	              .blur(function(){$(this).addClass('normalinput').removeClass('focusinput');pwdconfirmCheck(this);//密码验证
	});
	
	function pwdCheck(obj){
		/* 1, 密码不能为空
 		   2，长度不短于6个字符
 		   3，不能含有空格
		*/
		var str = $(obj).val();
		if(str.length < 6){
			if(str.length < 1){
				$(obj).siblings('p').slideDown(tipsspeed).html(MsgRequest[1]);
			}else{
				$(obj).siblings('p').slideDown(tipsspeed).html(MsgRequest[2]);
			}
			//$(obj).removeClass('focusinput').addClass('errorinput');
			$(obj).siblings('i').eq(0).hide();
			$(obj).siblings('i').eq(1).show();
			result = false;
		}else{
			if(!result){
				inputReset(obj);
			}
		}
	};

	function pwdconfirmCheck(obj){
		if($(obj).val() != $('#password').val()){
			$(obj).siblings('p').slideDown(tipsspeed).html(MsgRequest[4]);
			$(obj).siblings('i').eq(0).hide();
			$(obj).siblings('i').eq(1).show();
			result = false;
		}else{
			if(!result){
				inputReset(obj);
				result = true;
			}
		}
	};

	function inputReset(obj){
		$(obj).siblings('p').slideUp(tipsspeed);
		$(obj).siblings('i').eq(0).show();
		$(obj).siblings('i').eq(1).hide();
	};

	$('#login').submit(function(){
		alert('a');
		console.log(result);
		if(result){}
		else{ return false;}
	});

});
