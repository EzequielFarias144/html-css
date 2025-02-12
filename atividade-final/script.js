window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Botão "Voltar ao topo"
const backToTopButton = document.getElementById("voltar_ao_topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animações ao rolar
const sections = document.querySelectorAll("section");

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
};

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);