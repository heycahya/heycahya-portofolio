document.addEventListener("DOMContentLoaded", () => {

  // --- 1. LOGIKA NAVBAR MOBILE ---
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

  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      if (projectFilter) projectFilter.classList.remove("element-hidden");
      if (extraProjects) {
        extraProjects.forEach(card => card.classList.remove("element-hidden"));
      }
      if (viewAllCta) viewAllCta.style.display = "none";
    });
  }

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filterValue = button.getAttribute("data-filter");

        if (allProjectCards) {
          allProjectCards.forEach(card => {
            const category = card.getAttribute("data-category");
            if (filterValue === "all" || category === filterValue) {
              card.classList.remove("hide"); 
            } else {
              card.classList.add("hide");
            }
          });
        }
      });
    });
  }

  // --- 4. LOGIKA TOMBOL SHARE (COPY LINK) ---
  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      // Menyalin URL halaman saat ini ke clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        const originalText = shareBtn.innerHTML;
        // Ubah teks sementara jadi "Tersalin!"
        shareBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Tautan Tersalin!`;
        
        // Kembalikan teks setelah 2 detik
        setTimeout(() => {
          shareBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }

});
