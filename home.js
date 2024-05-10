// popup infoboxes
const infoBoxes=document.querySelectorAll('.car_infobox');
const closeBtns=document.querySelectorAll('.close_but');
const carPopup=document.querySelectorAll('.car_popup');
const carLayouts=document.querySelectorAll('.car_layout');
console.log(carPopup);
for (let i=0; i<infoBoxes.length; i++){
    infoBoxes[i].addEventListener('click', function(){
        carPopup[i].classList.toggle('hidden');
        carLayouts[i].classList.toggle('hidden');
    });
    closeBtns[i].addEventListener('click', function(){
        carPopup[i].classList.toggle('hidden');
        carLayouts[i].classList.toggle('hidden');
    });
}

// slides

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 