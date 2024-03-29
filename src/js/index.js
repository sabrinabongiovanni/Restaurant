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




var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 6 seconds
}

/*Delivery and Booking*/

let deliveryButton = document.querySelector("#delivery-button");
let bookingButton = document.querySelector("#booking-button");
let menuBookingButton = document.querySelector("#link-prenota");

let delivery = "delivery";
let booking = "booking";

deliveryButton.addEventListener("click", function () {
  showFullwidthBox(delivery)
});
bookingButton.addEventListener("click", function() {
  showFullwidthBox(booking)
});
menuBookingButton.addEventListener("click", function() {
  showFullwidthBox(booking)
});

let deliveryBox = document.querySelector("#delivery-box");
let bookingBox = document.querySelector("#booking-box");
let boxes = document.querySelectorAll(".boxes");

function showFullwidthBox(actionType) {
  if (actionType == "delivery") {
    deliveryBox.classList.toggle('is-hidden');
  } else {
    bookingBox.classList.toggle('is-hidden');
  }

  for(var i = 0; i < boxes.length; i++) {
    if (actionType == "delivery") {
      if (i != 0) {
        boxes[i].classList.toggle('is-hidden');
      }
    } else {
      if (i != 2) {
        boxes[i].classList.toggle('is-hidden');
      }
    }
  }
}

let closeButton = document.querySelectorAll(".close").forEach(closeButton => {
  closeButton.addEventListener("click", closeBox);});


function closeBox() {
  deliveryBox.classList.add('is-hidden');
  bookingBox.classList.add('is-hidden');
  for(var i = 0; i < boxes.length; i++) {
  boxes[i].classList.remove('is-hidden');
  }
}

/* Book table alert */
let bookTableButton = document.querySelector("#book-table-button");

bookTableButton.addEventListener("click", bookTable);

function bookTable(event) {
  event.preventDefault;
  alert("Grazie per la prenotazione, ti contatteremo al più presto per confermare!")
}

