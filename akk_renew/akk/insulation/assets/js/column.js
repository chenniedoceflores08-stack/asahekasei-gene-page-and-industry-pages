document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('app') || typeof Vue === 'undefined') {
    return;
  }

  const scriptUrl = document.currentScript?.src ?? new URL('column.js', document.baseURI).href;
  const insulationRootUrl = new URL('../../', scriptUrl);
  const columnDataUrl = new URL('assets/json/column-data.json', insulationRootUrl);

  new Vue({
    el: '#app',
    data: {
      dataArr: null
    },
    async mounted() {
      const response = await fetch(columnDataUrl, {
        credentials: 'same-origin'
      });
      this.dataArr = await response.json();

      this.$nextTick(() => {
        if (window.GeneBootstrap5Page) {
          window.GeneBootstrap5Page.initSwipers([
            {
              selector: '.m-columnSwiper.swiper',
              mobileSlidesPerView: 1.15,
              mobileSpaceBetween: 12,
              breakpoints: {
                751: {
                  centeredSlides: false,
                  slidesPerView: 4,
                  spaceBetween: 20
                }
              }
            }
          ]);
        } else if (window.jQuery && typeof window.jQuery.fn?.slick === 'function') {
          window.jQuery('.m-columnList.slickTarget').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 750,
                settings: {
                  centerMode: true,
                  slidesToShow: 1
                }
              }
            ]
          });
        }
      });
    }
  });
});
