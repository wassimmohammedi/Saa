 
 function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleNavbar() {
let navbar = document.getElementById("navbare");
navbar.classList.toggle("active");
}
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function() {
const currentScroll = window.scrollY;

// Always show navbar when at the top of the page
if (currentScroll <= 0) {
navbar.classList.remove("nav-hidden");
} else {
// Hide on scroll down, show on scroll up
if (currentScroll > lastScrollTop) {
    navbar.classList.add("nav-hidden");
} else {
    navbar.classList.remove("nav-hidden");
}
}

lastScrollTop = currentScroll;
});

