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

// Select all the navbar links
const navbarLinks = document.querySelectorAll('a.nav-link');

// Add click event listener to each link
navbarLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default link behavior

    // Get the target section ID from the link's href
    const targetSection = document.querySelector(this.getAttribute('href'));

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({
      behavior: 'smooth',   // Smooth scroll
      block: 'start'        // Align to the top of the section
    });
  });
});