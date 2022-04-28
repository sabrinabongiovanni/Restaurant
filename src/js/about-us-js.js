window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".custom-row");
    let logo = document.querySelector(".logo-small")

    navbar.classList.toggle("scrolling-active", window.scrollY > 50);
    logo.classList.toggle("scrolling-active-logo", window.scrollY > 50);
});

let menuTrigger = document.querySelector(".menu-trigger")
menuTrigger.addEventListener("click", showMenu)

let menu = document.querySelector("ul");
let menuSection = document.getElementById("navbar-menu-section");

function showMenu() {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

/*** Page about us - Slider dicono di noi ***/

var slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  
  console.log(slides);
  slides[0].style.display = "block";

  if (n > slides.length) {
    slideIndex = 1
  };
    
  if (n < 1) {
    slideIndex = slides.length
  };

  for (let slide of slides) {
      slide.style.display = "none";
  }

  if (slideIndex > 0) {
  slides[(slideIndex)-1].style.display = "block";} else {
  slides[slideIndex].style.display = "block";}
  }