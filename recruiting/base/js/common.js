$(function() {

    //スクロールしてトップ
    var topBtn = $('#page-top');
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //SP　MENU
    var state = false;
    var scrollpos;

    $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
        if (state == false) {
            scrollpos = $(window).scrollTop();
            $('body').addClass('fixed').css({
                'top': -scrollpos
            });
            $('#menu').addClass('open');
            state = true;
        } else {
            $('body').removeClass('fixed').css({
                'top': 0
            });
            window.scrollTo(0, scrollpos);
            $('#menu').removeClass('open');
            state = false;
        }
    });


});

$(window).scroll(function(){
  var yLine = $(this).scrollTop();
  //  $('#bg1').css('background-position', 'left top ' +parseInt( -yLine / 4 ) +'px');
  //  $('#bg2').css('background-position', 'left top ' +parseInt( -yLine / 2 ) +'px');
  });
