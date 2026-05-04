window.GeneBootstrap5Page = (() => {
  const scriptUrl = document.currentScript?.src ?? new URL('gene-bootstrap5-page.js', document.baseURI).href;
  const insulationRootUrl = new URL('../../', scriptUrl);

  async function loadInclude(targetId, url, options = {}) {
    const response = await fetch(url, { credentials: 'same-origin' });
    const html = await response.text();
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.innerHTML = options.trimTrailingWrap ? html.replace(/<\/div>\s*$/, '') : html;
  }

  function initHeaderBehaviors() {
    const navs = document.querySelectorAll('.nav');
    const fixHeader = document.querySelector('.fix-header');
    const body = document.body;
    const navToggle = document.getElementById('nav-toggle');
    const overlay = document.getElementById('overlay');
    const spMenus = document.querySelectorAll('.sp_menu_nest');

    const updateHeaders = () => {
      const scrollTop = window.scrollY;

      navs.forEach((nav) => {
        nav.classList.toggle('fixed', scrollTop > 129);
      });

      if (fixHeader) {
        fixHeader.style.top = scrollTop > 94 ? '0' : '-66px';
        fixHeader.style.opacity = scrollTop > 94 ? '1' : '0';
      }
    };

    if (navToggle) {
      const toggleMenu = () => body.classList.toggle('open');
      navToggle.addEventListener('click', toggleMenu);
      overlay?.addEventListener('click', toggleMenu);
    }

    spMenus.forEach((menu) => {
      menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
          return;
        }

        const icon = menu.querySelector('p span');
        const submenu = menu.querySelector('ul');
        const isOpen = icon?.classList.contains('nest_active');

        icon?.classList.toggle('nest_active', !isOpen);
        if (submenu) {
          submenu.style.display = isOpen ? 'none' : 'block';
        }
      });
    });

    window.addEventListener('scroll', updateHeaders, { passive: true });
    updateHeaders();
  }

  function scrollToHash(hash, smooth = true) {
    if (!hash || hash === '#') {
      return;
    }

    const target = document.querySelector(hash);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({
      top,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  function initAnchorScroll() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) {
        return;
      }

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') {
        return;
      }

      if (!document.querySelector(hash)) {
        return;
      }

      event.preventDefault();
      history.replaceState(null, '', hash);
      scrollToHash(hash);
    });

    if (window.location.hash) {
      window.scrollTo(0, 0);
      setTimeout(() => scrollToHash(window.location.hash, false), 100);
    }
  }

  function initSwipers(configs = []) {
    configs.forEach((config) => {
      document.querySelectorAll(config.selector).forEach((element) => {
        new Swiper(element, {
          loop: true,
          speed: config.speed ?? 600,
          autoplay: config.autoplay === false ? false : {
            delay: config.delay ?? 5000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: element.querySelector('.c-swiper__button--next'),
            prevEl: element.querySelector('.c-swiper__button--prev')
          },
          slidesPerView: config.mobileSlidesPerView ?? 1.15,
          centeredSlides: config.centeredSlides ?? true,
          spaceBetween: config.mobileSpaceBetween ?? 12,
          breakpoints: config.breakpoints ?? {
            751: {
              centeredSlides: false,
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
        });
      });
    });
  }

  async function init(options = {}) {
    await Promise.all([
      loadInclude(
        options.headerTargetId ?? 'site-header',
        new URL('include/header.html', insulationRootUrl),
      ),
      loadInclude(
        options.footerTargetId ?? 'site-footer',
        new URL('include/footer.html', insulationRootUrl),
        { trimTrailingWrap: true }
      )
    ]);

    initHeaderBehaviors();
    initAnchorScroll();

    if (options.swipers?.length) {
      initSwipers(options.swipers);
    }

    options.afterInit?.();
  }

  return {
    init,
    initSwipers
  };
})();
