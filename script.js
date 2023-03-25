
// ...

const firstSection = document.querySelector('#first-section');
const secondSection = document.querySelector('#second-section');
let hasScrolled = false;

//MENU
const menuOpen =  document.querySelector(".menu-open");
const croix = document.querySelector(".croix");
const burger = document.querySelector('.burger');


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


// animation 
const logo = document.querySelector('.logo');
gsap.fromTo(".logo", {
  y : -200,
}, {y : 0,
  duration : 1,
  delay: 1
})

const menu = document.querySelector('.menu');
gsap.fromTo(".menu", {
  y : -200,
}, {y: 0,
  duration : 1,
  delay: 1
})

gsap.fromTo(".burger", {
  y : -200,
}, {y : 0,
  duration : 1,
  delay: 1
})

const nom = document.querySelector('.nom');
gsap.fromTo(".nom", {
  opacity : 0,
}, {opacity : 1,
  delay: 1,
  duration : 2,
})

const dev = document.querySelector('.dev');
gsap.fromTo(".dev", {
  opacity : 0,
}, {opacity : 1,
  delay: 1,
  duration : 2,
})

const junior = document.querySelector('.junior');
gsap.fromTo(".junior", {
  x : 3000,
}, {x : 0,
  duration : 1.5,
    delay: 0.7
})

const hii = document.querySelector('.hii');
gsap.fromTo(".hii", {
  y: -100,
  x: -300,
  scale: 4
}, {
  y: 0,
  x: 0,
  duration : 1.5,
  scale: 1
})


const hi = document.querySelector('.hi');
gsap.fromTo(".hi", {
  scale: 4,
}, {
  duration : 1.5,
  scale: 1
})

const para = document.querySelector('.para');
gsap.fromTo(".para",{
  opacity : 0,
}, {opacity : 1,
  delay: 1,
  duration : 2,
})

const stack = document.querySelector('.stack');
gsap.fromTo(".stack", {
  y : 300,
}, {y : 0,
  duration : 1,
    delay: 1
})


const cv = document.querySelector('.cv');
gsap.fromTo(".cv", {
  y: 300,
}, {y : 0,
  duration : 1,
    delay: 1

})

