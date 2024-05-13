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

let slideIndex = [1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  console.log("test");
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  console.log(slideId[no]);
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
    x[i].style.display = "none";
  }
  if(x[slideIndex[no]-1] != undefined){
 
  x[slideIndex[no]-1].style.display = "block";
  }
} 