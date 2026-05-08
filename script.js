// Typing animation
const roles = ["Data Analyst", "Excel Expert", "SQL Developer", "Python Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = roles[i];
    if (!isDeleting) {
        document.querySelector(".typing").textContent = current.slice(0, ++j);
        if (j === current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.querySelector(".typing").textContent = current.slice(0, --j);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll reveal
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
});