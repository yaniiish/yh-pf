

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
})
window.addEventListener('resize', hideElementOnLargeScreen);

//Menu disparait au dessus de 1024px
function hideElementOnLargeScreen() {
  const screenWidth = window.innerWidth;
 

  if (screenWidth > 1024 && menuOpen) {
    menuOpen.style.display = 'none';
  }
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//email



// Fonction pour envoyer l'e-mail
function sendMail() {
  // Récupérer les données du formulaire
  const nom_entreprise = document.getElementById("nom_entreprise").value;
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Paramètres de l'e-mail à envoyer
  const params = {
      nom_entreprise: nom_entreprise,
      nom: nom,
      email: email,
      message: message
  };

  // Envoyer l'e-mail en utilisant emailJS
  emailjs.send("service_9q0lgbf", "template_r11l3gl", params)
      .then(function () {
          alert("Votre e-mail a été envoyé avec succès !");
      }, function (error) {
          console.error("Une erreur est survenue : ", error);
      });
}