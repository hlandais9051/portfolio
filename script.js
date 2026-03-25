// =====================
// DÉFILEMENT FLUIDE
// Quand on clique sur un lien de navigation,
// la page défile doucement vers la section
// =====================
document.querySelectorAll("nav a").forEach((lien) => {
  lien.addEventListener("click", function (e) {
    e.preventDefault();
    const cible = document.querySelector(this.getAttribute("href"));
    cible.scrollIntoView({ behavior: "smooth" });
  });
});

// =====================
// APPARITION AU SCROLL
// Les sections apparaissent en fondu
// quand on arrive dessus en scrollant
// =====================
const sections = document.querySelectorAll("section");

const observateur = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // La section devient visible
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
); // 0.1 = déclenche quand 10% de la section est visible

sections.forEach((section) => observateur.observe(section));

// =====================
// NAVIGATION ACTIVE
// Le lien de nav se colore selon
// la section actuellement visible
// =====================
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const hauteur = section.offsetTop - 100;
    const lienActif = document.querySelector(`nav a[href="#${section.id}"]`);

    if (window.scrollY >= hauteur && lienActif) {
      // Retire "actif" de tous les liens
      document
        .querySelectorAll("nav a")
        .forEach((l) => l.classList.remove("actif"));
      // Ajoute "actif" au lien correspondant
      lienActif.classList.add("actif");
    }
  });
});

// =====================
// RÉINITIALISATION DU FORMULAIRE
// Vide les champs après l'envoi
// =====================
const formulaire = document.querySelector(".contact-form");

formulaire.addEventListener("submit", function () {
  // On attend 1 seconde que Web3Forms traite l'envoi
  // puis on remet tous les champs à zéro
  setTimeout(() => {
    formulaire.reset();
  }, 1000);
});
