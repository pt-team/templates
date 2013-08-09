/**
 * height100%.js
 *
 * set the content part to 100% height.
 */
$(function(){
	w_resize('#primary');
	set_height('#primary');
});
function set_height(target){
	var window_height = $(window).height();
	var target_height = $(target).height();
	if(target_height < window_height){
		$(target).css('height', window_height);		
	}
}
function w_resize(target){
	$(window).resize(function(){
		var window_height = $(window).height();
		var target_height = $(target).height();
		if(target_height < window_height){
			$(target).css('height', window_height);			
		}
	});
}