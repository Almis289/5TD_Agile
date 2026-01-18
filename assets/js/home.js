document.addEventListener("DOMContentLoaded", function () {
  // ✅ Chỉ chạy Swiper nếu có phần tử mySwiper
  if (document.querySelector('.mySwiper')) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }

  const toggle = document.getElementById("category-toggle");
  const menu = document.getElementById("category-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
      if (!toggle.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add("hidden");
      }
    });
  }
});
