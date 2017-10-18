//sub_3.js

(function($){

  var menu = $('.navbox')
  var menubox = $('.menubox')

  menubox.hide();

  menu.on('mouseenter',
    function(){
      menubox.stop().slideDown();
    
});//mouseenter

 menu.on('mouseleave',
    function(){
      menubox.stop().slideUp();
});

//-----------헤드고정
    $("#headbox").css({"position": "fixed", "top": 0, 'zIndex': 2000});
    $('#bannerbox').css({'marginTop':'120px'});
 // --------------- 더보기 버튼만들기

var more_01 = $('.list_button');
var more_02 = $('.list_button_2');
var goods_01 = $('.goods_list_2');

more_02.hide();

more_01.on('click',['button'],function(e){
  e.preventDefault();
  goods_01.slideDown();
  $(this).slideUp();
  more_02.slideDown();

});

})(this.jQuery);//mouseenter