  // کنترل تب‌ها
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // کنترل آکاردئون موبایل
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("active");
    });
  });

  // تابع فول‌اسکرین
  function goFullscreen(id) {
    let iframe = document.getElementById(id);
    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  }

  document.getElementById("fullscreenBtn").addEventListener("click", () => {
    goFullscreen("videoFrame");
  });