'use strict';

const names = [
'ひな1','ひな2','ひな3','ひな4','ひな5','ひな6',
'ひな1','ひな2','ひな3','ひな4','ひな5','ひな6',
'ひな1','ひな2','ひな3','ひな4','ひな5','ひな6',
'ひな1','ひな2','ひな3','ひな4','ひな5'
]

const thinking = [
'かわいい','めっちゃかわいい','まあね','ソイミルク','zoff',
'かわいい','めっちゃかわいい','まあね','ソイミルク','zoff',
'かわいい','めっちゃかわいい','まあね','ソイミルク','zoff',
'かわいい','めっちゃかわいい','まあね','ソイミルク',
'かわいい','めっちゃかわいい','まあね','ソイミルク'
]



//logoの表示
$(window).on('load', function () {
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
    $(".menu_btn").toggleClass('active', false);
    $(".top_menu").toggleClass('active', false);
})

    // $(".menu-content").click(function () {
    // })

    ; (function (d, $) {
        $(".pageback").on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1200, 'easeInOutQuart');
        })
    })(document, jQuery);


$(function () {
    $(window).scroll(function () {
        $('.right_to_left').each(function () {
            var elementTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elementTop - windowHeight + 150) {
                $(this).addClass('scrollin');
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.left_to_right').each(function () {
            var elementTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elementTop - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {  //400pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '80px' //下から100pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-80px' //下から-100pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 300); //0.5秒かけてトップへ戻る
    return false;
  });
});


////////////メンバーループ

let tiles = document.getElementById('tiles');
let introduction = document.getElementById('introduction');

var show = 12; //最初に表示する件数
var num = 11;  //clickごとに表示したい件数
var contents = '.tiles a'; // 対象のlist
$('.more').on('click', function () {
  $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
  if ($(contents + '.is-hidden').length == 0) {
    $('.more').fadeOut();
  }
});

for (let i = 1; i < 24; i++) {
    let introduction =
        // `<li class="members_a">` +
        // `<a href="member1A.html?id=${i}" >` +
        // `<div class="img_container">` +
        // `<img src="../imgA/iisha${i}.jpg" alt="" class="member_img_a">` +
        // `</div>` +
        // `<p class="name_a">${names[i-1]}</p>` +
        // `<p class="prize_a">¥${prize[i-1]}</p>` +
        // `</a>` +
        // `</li>`;
        `<a class="tile" href="hina.html?id=${i}">` +
        `    <img src="../img/hina2${i}.jpg" class="hina_img">` +
        `    <div class="details">` +
        `        <span class="title">${names[i-1]}</span>` +
        `        <span class="info">${thinking[i-1]}</span>` +
        `    </div>` +
        `</a>`;
    tiles.insertAdjacentHTML("beforeend", introduction)
    $(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
}

$('.info:even').addClass('change_color');
// $('li').eq(1).addClass('style-li');

// $(function () {
//     $('.change').on('click', function () {
//         $('.members_a').toggleClass('change_color');
//     });
// });