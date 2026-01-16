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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".prev",
    prevEl: ".next",
  },
});
