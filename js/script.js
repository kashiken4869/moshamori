'use strict';

//logoの表示
$(window).on('load',function(){
  $("#splash").delay(1000).fadeOut('slow');//ローディング画面を1秒（1000ms）待機してからフェードアウト
  $("#splashLogo").delay(900).fadeOut('slow');//ロゴを0.9秒（900ms）待機してからフェードアウト
});

//ハンバーガーアイコン
$(".menu_btn").click(function () {
  $(this).toggleClass('active');
  $(".top_menu").toggleClass('active');
});

// $(".menu_btn").click(function () {
// });

$(".menu-content").click(function () {
  $(".menu_btn").toggleClass('active' , false);
  $(".top_menu").toggleClass('active' , false);
})

// $(".menu-content").click(function () {
// })

;(function (d, $) {
  $(".pageback").on('click', function(e){
    e.preventDefault();   
    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top
      }, 1200, 'easeInOutQuart');
  })
})(document, jQuery);