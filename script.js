// animation 
const logo = document.querySelector('.logo');
console.log(logo);
gsap.fromTo(".logo", {
  x : -300,
  
}, {x : 0,
  duration : 0.8
})

const menu = document.querySelector('.menu');
gsap.fromTo(".menu", {
  x : 300,
}, {x : 0,
  duration : 0.8
})

const burger = document.querySelector('.burger');
gsap.fromTo(".burger", {
  x : 300,
}, {x : 0,
  duration : 0.8
})




// ...

const firstSection = document.querySelector('#first-section');
const secondSection = document.querySelector('#second-section');
let hasScrolled = false;

//MENU
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





// Fonction pour envoyer l'e-mail
function sendMail() {
  // Récupérer les données du formulaire
  const nom_entreprise = document.getElementById("nom_entreprise").value;
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const msg = document.querySelector('.msg');
  const form = document.querySelector('.form')


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
          msg.innerText = "Message envoyé !"
          form.reset()
      }, function (error) {});
}


