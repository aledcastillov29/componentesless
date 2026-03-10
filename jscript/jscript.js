document.addEventListener('DOMContentLoaded', () => {


  const toggle   = document.getElementById('navToggle');
  const navLinks = document.querySelector('.navbar__links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('abierto');
  });


  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('abierto'));
  });

 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const destino = document.querySelector(anchor.getAttribute('href'));
      if (destino) {
        e.preventDefault();
        window.scrollTo({
          top:      destino.getBoundingClientRect().top + window.scrollY - 70,
          behavior: 'smooth',
        });
      }
    });
  });

});