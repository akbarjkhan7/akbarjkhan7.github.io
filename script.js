// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("show");
});

// Close nav when clicking a link (mobile)
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("show");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

// Recommendation modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".shot").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
});

// Show more testimonials
const cards = document.querySelectorAll("#testimonialList .t-card");
const showMoreBtn = document.getElementById("showMoreBtn");

const VISIBLE_COUNT = 6;

// Hide all cards after the first 6
cards.forEach((card, index) => {
  if (index >= VISIBLE_COUNT) {
    card.style.display = "none";
  }
});

if (cards.length <= VISIBLE_COUNT) {
  showMoreBtn.style.display = "none";
}

showMoreBtn.addEventListener("click", () => {
  cards.forEach(card => {
    card.style.display = "block";
  });
  showMoreBtn.style.display = "none";
});

// Show more Data Science projects
const showMoreDsBtn = document.getElementById("showMoreDsBtn");
const moreDsProjects = document.getElementById("more-ds-projects");

if (showMoreDsBtn && moreDsProjects) {
  showMoreDsBtn.addEventListener("click", () => {
    moreDsProjects.classList.toggle("hidden");

    showMoreDsBtn.textContent = moreDsProjects.classList.contains("hidden")
      ? "Show more projects"
      : "Show fewer projects";
  });
}
