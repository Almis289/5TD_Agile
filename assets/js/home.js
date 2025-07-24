var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Chỉ hiển thị 1 ảnh một lúc
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Bấm vào nút tròn để chuyển ảnh
  },
  autoplay: {
    delay: 10000, // Tự động chạy sau 3 giây
    disableOnInteraction: false, // Không dừng khi người dùng bấm vào
  },
});
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("category-toggle");
  const menu = document.getElementById("category-menu");

  toggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    menu.classList.toggle("hidden");
  });

  // Ẩn menu nếu click ra ngoài
  document.addEventListener("click", function (event) {
    if (!toggle.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.add("hidden");
    }
  });
});


