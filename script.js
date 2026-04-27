const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  document.body.classList.remove("nav-open");
  header.classList.remove("nav-active");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
}

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-active");
  document.body.classList.toggle("nav-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeNav();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
