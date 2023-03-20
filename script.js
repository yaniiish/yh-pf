
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


