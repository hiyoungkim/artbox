//sub_1.js

(function($){

  var menu = $('.navbox')
  var menubox = $('.menubox')
  var conOffset =$('#historybox').offset().top;

  menubox.hide();

  menu.on('mouseenter',
    function(){
      menubox.stop().slideDown();
    
});//mouseenter

 menu.on('mouseleave',
    function(){
      menubox.stop().slideUp();

});
 // ------------------------------------------------------------

var h_menu = $('.history_menu').find('li'); // 위에서 히스토리까지 위치파악
var h_menu_01 = h_menu.eq(0).offset().top; // 이미지리스트
var h_menu_02 = h_menu.eq(1).offset().top;
var h_menu_03 = h_menu.eq(2).offset().top;
var h_menu_04 = h_menu.eq(3).offset().top;
var h_menu_05 = h_menu.eq(4).offset().top;
 

  $(window).on('scroll',function(){
    var winOffset = $(this).scrollTop(); // 헤드에서위치 
        var timed = 500;

  
if(winOffset > h_menu_01 - 700){
  h_menu.eq(0).find('div').animate({'opacity':1});
}

if(winOffset > h_menu_01 - 400){
  h_menu.eq(1).find('div').animate({'opacity':1});
}

if(winOffset > h_menu_01 - 100){
  h_menu.eq(2).find('div').animate({'opacity':1});
}

if(winOffset > h_menu_01 + 200){
  h_menu.eq(3).find('div').animate({'opacity':1});
}

if(winOffset > h_menu_01 + 500){
  h_menu.eq(4).find('div').animate({'opacity':1});
}

  });

// -----------------------------------------------------------------------

// 헤드고정-------------------------------------------------

    $("#headbox").css({"position": "fixed", "top": 0, 'zIndex': 2000});
    $('#bannerbox').css({'marginTop':'120px'});



})(this.jQuery);//mouseenter