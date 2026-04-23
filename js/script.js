document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});
