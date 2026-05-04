// JavaScript Document
if (document.getElementById('top') != null) {
    /* ----------------------------------------------------------------------------------------------------
  *  top swiper
  * --------------------------------------------------------------------------------------------------*/

    let topViewSwiper = new Swiper(".top-swiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 7000,
        },
        allowTouchMove: false,
        speed: 1500,
    });
}