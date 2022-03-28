window.addEventListener("scroll", function() {
    let navbar = document.querySelector("#menu");
    let logo = document.querySelector(".logo-small")

    navbar.classList.toggle("scrolling-active", window.scrollY > 0);
    logo.classList.toggle("scrolling-active-logo", window.scrollY > 0)
})