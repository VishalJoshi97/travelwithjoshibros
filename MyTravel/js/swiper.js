const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    direction: "horizontal",
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400], // slide away in 3D depth
      },
      next: {
        translate: ["100%", 0, 0], // next slide comes in from right
      },
    },
    autoplay: {
      delay: 5000,//delay between transitions in ms
      disableOnInteraction: false,
    },
    speed:400,
    spaceBetween: 100,

  });
  