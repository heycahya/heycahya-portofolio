document.addEventListener("DOMContentLoaded", () => {

  // --- 1. LOGIKA NAVBAR MOBILE ---
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      // Mencegah background scroll saat menu terbuka di HP
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

  // --- 2. LOGIKA EFEK SCROLL NAVBAR ---
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // --- 3. LOGIKA VIEW ALL & FILTER PROJECT ---
  const viewAllBtn = document.getElementById("view-all-btn");
  const viewAllCta = document.getElementById("view-all-cta");
  const projectFilter = document.getElementById("project-filter");
  const extraProjects = document.querySelectorAll(".extra-project");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const allProjectCards = document.querySelectorAll(".project-card");

  // A. Aksi ketika tombol "View All Projects" diklik
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      // 1. Munculkan menu filter kategori (Hapus class element-hidden)
      if (projectFilter) projectFilter.classList.remove("element-hidden");
      
      // 2. Munculkan semua kartu project tambahan yang tadi disembunyikan
      if (extraProjects) {
        extraProjects.forEach(card => card.classList.remove("element-hidden"));
      }
      
      // 3. Sembunyikan tombol "View All" itu sendiri agar tidak mengganggu
      if (viewAllCta) viewAllCta.style.display = "none";
    });
  }

  // B. Aksi ketika tombol Filter Kategori (All, Branding, dll) diklik
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Pindahkan gaya (warna hitam) ke tombol yang sedang aktif
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        // Saring (filter) kartu proyek berdasarkan atribut data-category
        if (allProjectCards) {
          allProjectCards.forEach(card => {
            const category = card.getAttribute("data-category");
            
            if (filterValue === "all" || category === filterValue) {
              card.classList.remove("hide"); // Munculkan kartu
            } else {
              card.classList.add("hide");    // Sembunyikan kartu
            }
          });
        }
      });
    });
  }

});
