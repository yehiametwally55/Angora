document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');
  const logoWhite = document.querySelector('.navbar-brand img[src="images/logo-white.png"]');
  const logoBlackSrc = 'images/logo-black.png';
  const originalLogoSrc = logoWhite.src;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
      if (logoWhite) {
        logoWhite.src = logoBlackSrc;
      }
    } else {
      navbar.classList.remove('navbar-scrolled');
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
      if (logoWhite) {
        logoWhite.src = originalLogoSrc;
      }
    }
  });
});
