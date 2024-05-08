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