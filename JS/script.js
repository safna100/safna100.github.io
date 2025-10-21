$(document).ready(function(){
    $('.toggle_btn').click(function(){
        $('.toggle_btn').toggleClass('close_toggle');
        // $('header nav ul').toggleClass('toggled');
    })

    $('.toggle_btn').click(function(){
        $('.menu').addClass('menuactive');
        // $('header nav ul').toggleClass('toggled');
    })
    $('.toggle_btn').click(function(){
        $('.menu').removeClass('menuactive');
        // $('header nav ul').toggleClass('toggled');
    })
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("header_cnt").addClass("scrolled");
  } else {
    $("header_cnt").removeClass("scrolled");
  }
});


