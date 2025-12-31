$(document).ready(function(){
    $('.toggle_btn').click(function(){
        $('.toggle_btn').toggleClass('close_toggle');
        // $('header nav ul').toggleClass('toggled');
    })

})

$(document).ready(function(){
 $('.popular-carousal').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev custom-arrow left"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next custom-arrow right"><i class="fa-solid fa-chevron-right"></i></button>',
});


$('.single-item').slick({
		autoplay:true,
        autoplaySpeed: 800,
});
});



const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const item = btn.parentElement;
    item.classList.toggle('open');
    btn.classList.toggle('active');
  });
});



const sortSelect = document.getElementById('sortSelect');
const sortSelected = sortSelect.querySelector('.sort-selected');
const sortOptions = sortSelect.querySelector('.sort-options');

sortSelected.addEventListener('click', () => {
  sortSelect.classList.toggle('open');
});

sortOptions.querySelectorAll('div').forEach(opt => {
  opt.addEventListener('click', () => {
    sortSelected.childNodes[0].textContent = opt.textContent;
    sortSelect.classList.remove('open');
    // Here you can trigger sorting/filtering logic!
  });
});

window.addEventListener('click', (e) => {
  if (!sortSelect.contains(e.target)) {
    sortSelect.classList.remove('open');
  }
});


// +++++++++++++++++++++

const btn = document.getElementById("sizeChartBtn");
const modal = document.getElementById("sizeChartModal");
const closeBtn = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "flex"; // modal open
}
closeBtn.onclick = function() {
  modal.style.display = "none"; // modal close
}
// Clicking outside modal-content to close
window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none";
  }
}



// ++++++++++++++++
// 

