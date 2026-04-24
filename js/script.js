document.addEventListener("DOMContentLoaded", () => {
  // 1. Logika Navbar Mobile
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
    });

    // Tutup menu jika salah satu link diklik
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }

  // 2. Logika Scroll Navbar (Bayangan/Warna)
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // 3. Logika Filter Kategori Proyek
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Pindahkan status 'active' antar tombol
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        projectCards.forEach(card => {
          const category = card.getAttribute("data-category");
          if (filterValue === "all" || category === filterValue) {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        });
      });
    });
  }
});
