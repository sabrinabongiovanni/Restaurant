window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".custom-row");
    let logo = document.querySelector(".logo-small")

    navbar.classList.toggle("scrolling-active", window.scrollY > 50);
    logo.classList.toggle("scrolling-active-logo", window.scrollY > 50)
})

let slideIndex = 0;
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

let delivery = "delivery";
let booking = "booking";

deliveryButton.addEventListener("click", function () {
  showFullwidthBox(delivery)
});
bookingButton.addEventListener("click", function() {
  showFullwidthBox(booking)
});

function showFullwidthBox(actionType) {
  let deliveryBox = document.querySelector("#delivery-box");
  let bookingBox = document.querySelector("#booking-box");
  let boxes = document.querySelectorAll(".boxes");
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
        console.log("ciao");
      }
    }
  }
}

let bookTableButton = document.querySelector("#book-table-button");

bookTableButton.addEventListener("click", bookTable);

function bookTable(event) {
  event.preventDefault;
  alert("Grazie per la prenotazione, ti contatteremo al più presto per confermare!")
}


/*
const quickViewButtons = document.querySelectorAll('[data-quick-view');
const closeButtons = document.querySelectorAll('[data-close]');
const fullwidthCards = document.querySelectorAll('.fullwidth');

let toggle;
let toggleParent;
let fullwidth;

const openQuickView = (toggle, toggleParent, fullwidth) => {
  toggle.setAttribute('aria-expanded', 'true');
  toggleParent.classList.toggle('is-selected');
  fullwidth.classList.toggle('is-hidden');
  fullwidth.setAttribute('tabIndex', '0');
};

const closeQuickView = (toggle, toggleParent, fullwidth) => {
  toggle.setAttribute('aria-expanded', 'false');
  toggleParent.classList.toggle('is-selected');
  fullwidth.classList.toggle('is-hidden');
  fullwidth.removeAttribute('tabIndex');
};

quickViewButtons.forEach(quickView => {
  fullwidth = quickView.parentElement.nextElementSibling;
  quickView.setAttribute('aria-expanded', 'false');
  quickView.setAttribute('aria-controls', fullwidth.id);

  quickView.addEventListener('click', (e) => {
    toggle = e.target;
    toggleParent = toggle.parentElement;
    fullwidth = toggleParent.nextElementSibling;

    if (toggle.getAttribute('aria-expanded') === 'false') {
      fullwidthCards.forEach(fullwidthOpen => {
        if (!fullwidthOpen.classList.contains('is-hidden')) {
          toggleParentOpen = fullwidthOpen.previousElementSibling;
          toggleOpen = toggleParentOpen.querySelector('[data-quick-view]');
          closeQuickView(toggleOpen, toggleParentOpen, fullwidthOpen);}
        });
        openQuickView(toggle, toggleParent, fullwidth);
      } else {
        closeQuickView(toggle, toggleParent, fullwidth);
      }
      });
    });

    closeButtons.forEach(close => {
      close.addEventListener('click', (e) => {
          fullwidth = e.target.parentElement;
          toggleParent = e.target.parentElement.previousElementSibling;
          toggle = toggleParent.querySelector('[data-quick-view]');
  
          closeQuickView(toggle, toggleParent, fullwidth);
          toggle.focus(); 
      });
  });*/