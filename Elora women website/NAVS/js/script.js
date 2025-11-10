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

// Select elements
const thumbnails = document.querySelectorAll('.thumb');
const mainImg = document.getElementById('mainImg');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Track current image index
let currentIndex = 0;

// Function to update main image
function updateMainImage(index) {
  // Remove 'active' class from current
  document.querySelector('.thumb.active').classList.remove('active');
  
  // Add 'active' to clicked one
  thumbnails[index].classList.add('active');
  
  // Update main image source (replace thumbnail size with large image)
  mainImg.src = thumbnails[index].src.replace('100x150', '500x700');
  
  // Update index
  currentIndex = index;
}

// Thumbnail click
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateMainImage(index);
  });
});

// Left arrow click
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateMainImage(currentIndex);
});

// Right arrow click
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  updateMainImage(currentIndex);
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

// ????????????????????????????


const sizeBtns = document.querySelectorAll('.size-btn');
sizeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    sizeBtns.forEach(b => b.classList.remove('selected')); // Remove previous
    this.classList.add('selected'); // Add to clicked
    // Example: Print selected size to console
    console.log('Selected size:', this.innerText);
  });
});




