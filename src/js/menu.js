/*navbar*/
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".custom-row");
    let logo = document.querySelector(".logo-small")

    navbar.classList.toggle("scrolling-active", window.scrollY > 50);
    logo.classList.toggle("scrolling-active-logo", window.scrollY > 50);
});

/* menu section */
let brunchMenuTrigger = document.querySelector(".brunch-menu-trigger");
let lunchMenuTrigger = document.querySelector(".lunch-menu-trigger");
let dinnerMenuTrigger = document.querySelector(".dinner-menu-trigger");

let brunch = "brunch";
let lunch = "lunch";
let dinner = "dinner";

brunchMenuTrigger.addEventListener("click", function() {
  showMenu(brunch)
});

lunchMenuTrigger.addEventListener("click", function() {
  showMenu(lunch)
});

dinnerMenuTrigger.addEventListener("click", function() {
  showMenu(dinner)
});

let brunchMenu = document.getElementById("brunch");
let lunchMenu = document.getElementById("lunch");
let dinnerMenu = document.getElementById("dinner");

function showMenu(actionType) {
  if (actionType == "brunch") {
    brunchMenu.classList.toggle('hidden-menu');
    lunchMenu.classList.add('hidden-menu');
    dinnerMenu.classList.add('hidden-menu');
  }
  if (actionType == "lunch") {
    lunchMenu.classList.toggle('hidden-menu');
    brunchMenu.classList.add('hidden-menu');
    dinnerMenu.classList.add('hidden-menu');
  }
  if (actionType == "dinner") {
    dinnerMenu.classList.toggle('hidden-menu');
    brunchMenu.classList.add('hidden-menu');
    lunchMenu.classList.add('hidden-menu');
  }
}