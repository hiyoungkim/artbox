//sub_4.js


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

//------------글씨 클릭시 나타나게하기
  
   var ing_event = $('.ing_event');
   var p_event = $('.past_event');
   var ing_event_bt = $('.event_menubox>.list_title>li:nth-child(1)');
   var p_event_bt = $('.event_menubox>.list_title>li:nth-child(2)');
    p_event.hide();
   ing_event_bt.on('click', function(e){
    e.preventDefault();
        p_event.hide();
        ing_event.show();

      });
   p_event_bt.on('click', 
    function(e){
       e.preventDefault();
       p_event.show();
       ing_event.hide();

    }); // 지난이벤트 눌렀을때 지난목록 뜨고 현재목록 사라짐
 
  

})(this.jQuery);//mouseenter