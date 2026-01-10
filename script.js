// Barre de progression lors du scroll
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    // Calcul de la hauteur totale scrollable
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calcul du pourcentage
    const scrolled = (winScroll / height) * 100;
    
    // Application de la largeur à la barre
    document.getElementById("progress-bar").style.width = scrolled + "%";
}

// Gestion du mode sombre
const btn = document.getElementById("darkModeToggle");
const themeIcon = document.getElementById("themeIcon");
const currentTheme = localStorage.getItem("theme");

// Vérifier si un thème est déjà enregistré
if (currentTheme === "dark") {
    document.body.setAttribute("data-bs-theme", "dark");
    themeIcon.textContent = "☀️";
}

btn.addEventListener("click", function () {
    let theme = document.body.getAttribute("data-bs-theme");
    
    if (theme === "dark") {
        document.body.removeAttribute("data-bs-theme");
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        document.body.setAttribute("data-bs-theme", "dark");
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

// Animation des barres de compétences
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('aria-valuenow') + '%';
        }
    });
});

document.querySelectorAll('.progress-bar').forEach(bar => {
    bar.style.width = '0%'; // On force à 0 au départ
    observer.observe(bar);
});