/*
  TOUI v1.0
  Update 20161122
  Copyright 2016 Taoyuan World.
*/

jQuery(document).ready(function() {
	
	// 图片鼠标效果
	$(".mouse-box").hover(function(){
		$(this).find(".mask").fadeIn(300);
		$(this).find(".fa-circle").animate({left:'0'},300);		
		$(this).find(".fa-inverse").animate({left:'0'},300);
	},function(){
		$(this).find(".mask").fadeOut(300);
		$(this).find(".fa-circle").animate({left:'-300px'},300);
		$(this).find(".fa-inverse").animate({left:'300px'},300);
	});
	
	// 下拉菜单
	$(".down-menu").click(function(){
		$(".down-menu-box").slideToggle();
	});
    
    // 当input获得焦点时，隐藏提示
    $(".inp-focus:input").focus(function(){
        if($(this).val() == this.defaultValue){
            $(this).css("color","#333333");
            $(this).val("");
        }
    }).blur(function(){
        if ($(this).val() == "") {            
            $(this).val(this.defaultValue);
            this.style.color="#999999";
        }
    });
    
    // 替换位置字符
    var el = $('#weizhi'); 
    el.html(el.html().replace(/&gt;/ig, '<i class="fa fa-angle-right" aria-hidden="true"></i>'));
    
});