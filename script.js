//scroll de la section 1 a 2
const firstSection = document.querySelector('#first-section');
const secondSection = document.querySelector('#second-section');
let hasScrolled = false;

window.addEventListener('wheel', function(event) {
  if (event.deltaY > 0 && !hasScrolled) {
    hasScrolled = true;
    window.scrollTo({
      top: secondSection.offsetTop,
      behavior: 'smooth'
    });
  }
});

//MENU
const burger = document.querySelector(".burger");
const menuOpen =  document.querySelector(".menu-open");
const croix = document.querySelector(".croix");

burger.addEventListener('click', function () {
  menuOpen.style.display = "flex"
})

 croix.addEventListener('click', function () {
  menuOpen.style.display = "none"
  menuOpen.classList.toggle("show");


})
window.addEventListener('resize', hideElementOnLargeScreen);

//Menu disparait au dessus de 1024px
function hideElementOnLargeScreen() {
  const screenWidth = window.innerWidth;
 

  if (screenWidth > 1024 && menuOpen) {
    menuOpen.style.display = 'none';
  }
}

