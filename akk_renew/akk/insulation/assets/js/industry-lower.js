document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector(".other-industry-swiper");
    if (!el) return;

    new Swiper(el, {
        slidesPerView: "auto",
        spaceBetween: 24,
        speed: 1000,

        breakpoints: {
            768: {
                slidesPerView: "auto",
                spaceBetween: 48,
            },
        },

        allowTouchMove: true,
        simulateTouch: true,
        grabCursor: true,

        pagination: {
            el: ".other-industry-swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".other-industry-swiper-next",
            prevEl: ".other-industry-swiper-prev",
        },
    });
});