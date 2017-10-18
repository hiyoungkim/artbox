//sub_2.js


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

 // 헤드고정-------------------------------------------------
    $("#headbox").css({"position": "fixed", "top": 0, 'zIndex': 2000});
    $('#bannerbox').css({'marginTop':'120px'});

 
})(this.jQuery);//mouseenter