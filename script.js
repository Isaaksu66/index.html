// Menu Burger Toggle pour mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Lorsque l'utilisateur clique sur l'icône burger
menuToggle.addEventListener('click', () => {
  // Ajouter ou retirer la classe 'active' pour afficher/masquer le menu
  navLinks.classList.toggle('active');
});

// Fonction pour fermer le menu lorsque l'un des liens est cliqué
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(item => {
  item.addEventListener('click', () => {
    // Enlever la classe 'active' pour masquer le menu après un clic
    navLinks.classList.remove('active');
  });
});
