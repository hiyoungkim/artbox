//main.js//

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

});//mouseenter

 // #bannerbox 슬라이드 배너 ---------------------------------------------------------
 // 앞에 이미지 삽입
 var bannerWrap = $('.banner_wrap');
 var bannerLast = bannerWrap.children().last();
 bannerWrap.prepend(bannerLast);
 bannerWrap.css({marginLeft:'-100%'});

// 왼버튼 클릭, 왼쪽 이미지가 나오게 만들어라, 그리고 끝이미지를 처음으로 돌려라! 이때! 왼쪽에 여유이미지를 다시 생성하도록 처리해라!
var lBtn = $('.button');
lBtn.on('click',function(e){
e.preventDefault();
bannerWrap.stop().animate({marginLeft:0}, function(){ // 클릭하면,나오게!!
   bannerWrap.prepend(bannerWrap.children().last()); // 끈이미지 처음으로!
   bannerWrap.css({marginLeft:'-100%'});   // 이때!!!
});
});
// 오른버튼 클릭 하면, 오른쪽 이미지가 나오게 만들어라!, 그리고 처음이미지를 끝으로 돌려라! 이때! 왼쪽에 여유이미지를 다시 생성하도록 처리해라!
var rBtn = $('.button2');
rBtn.on('click',function(e){
  e.preventDefault();
  RightMove();
});

function RightMove(){
  bannerWrap.stop().animate({marginLeft:'-200%'}, function(){
     bannerWrap.append(bannerWrap.children().first()); 
     bannerWrap.css({marginLeft:'-100%'});
  });
}
 var repeat;
  // 오른버튼 을 일정시간마다 클릭(이미지가 이동하게 처리)
  // setInterval()
  var goRepeat = function(){    repeat =  setInterval(function(){ RightMove() },2500);  };
   goRepeat();
  // 마우스 올리면 자동 이동처리되는게 임시 정지
  var stopRepeat = function(){clearInterval( repeat ); };

// bannerWrap.on('mouseenter', stopRepeat).on('mouseleave', goRepeat);
  bannerWrap.on({'mouseenter': stopRepeat,'mouseleave':goRepeat});

// 헤드고정-------------------------------------------------
    $("#headbox").css({"position": "fixed", "top": 0, 'zIndex': 2000});
    $('#bannerbox').css({'marginTop':'120px'});

})(this.jQuery);