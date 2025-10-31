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
  if ($(this).scrollTop() > 40) {
    $("header_cnt").addClass("scrolled");
  } else {
    $("header_cnt").removeClass("scrolled");
  }
});



// page-loader
window.addEventListener("load", function () {
        const loader = document.getElementById("page-loader");
        const minimumDisplayTime = 1600;
        setTimeout(() => {
            loader.style.opacity = "0";
            const fadeOutDuration = 400; 
            setTimeout(() => {
                loader.style.display = "none";
            }, fadeOutDuration);
        }, minimumDisplayTime);
    });
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// type-writter
// +++++++++++++++++++++++++++++
// typewritter



