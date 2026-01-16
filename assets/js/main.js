tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF6600",
        "background-light": "#FFFFFF",
        "background-dark": "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
};
let hero_slide = new Swiper(".hero_slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".prev",
    prevEl: ".next",
  },
});
let testimonial_slide = new Swiper(".slide__products", {
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".right_action",
    prevEl: ".left_action",
  },
});
let favoriteCount = 0;
const favoriteCounter = document.getElementById("favorite_count");

document.querySelectorAll(".product_like").forEach((btn) => {
  btn.addEventListener("click", function () {
    const icon = this.querySelector(".material-symbols-outlined");

    // agar hali like qilinmagan bo‘lsa
    if (!this.classList.contains("liked")) {
      this.classList.add("liked");
      icon.classList.add("filled");
      icon.classList.add("text-primary");

      favoriteCount++;
    } else {
      // agar qayta bosilsa (unlike)
      this.classList.remove("liked");
      icon.classList.remove("filled");
      icon.classList.remove("text-primary");

      favoriteCount--;
    }

    favoriteCounter.textContent = favoriteCount;
  });
});
