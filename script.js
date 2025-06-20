// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
