document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");

  // 1. Navbar Mobile Toggle
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

  // 2. Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
    } else {
      navbar.style.background = "rgba(245, 245, 247, 0.8)";
      navbar.style.boxShadow = "none";
    }
  });

  // 3. Project Filter Logic
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Ubah status tombol aktif
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
});

// Fitur Share (Gunakan di halaman detail nanti)
function shareProject(title, url) {
  if (navigator.share) {
    navigator.share({ title: title, url: url });
  } else {
    window.open(`https://wa.me/?text=Cek proyek desain ini: ${url}`, '_blank');
  }
}
