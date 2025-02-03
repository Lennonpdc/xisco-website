// Get the navbar element
const navbar = document.querySelector('.navbar');

// Function to handle scroll event
// JavaScript for Navbar Scroll Effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
