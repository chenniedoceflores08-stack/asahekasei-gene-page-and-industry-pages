const fadeInTarget = document.querySelectorAll('.fade-target');
const fadeInChainTarget = document.querySelectorAll('.fade-chain-target');

const fadeInOptions = {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 0
};

const fadeInElement = function (entries, fadeInObserver) {
    entries.forEach((entry, n) => {

        const nowElement = entry.target;

        if (entry.isIntersecting) {
            nowElement.classList.add("active");
        }
    })
};

const fadeInObserver = new IntersectionObserver(fadeInElement, fadeInOptions);

const fadeInChainElement = function (entries, fadeInChainObserver) {
    entries.forEach((entry, n) => {

        const nowElement = entry.target;

        if (entry.isIntersecting) {
            nowElement.classList.add("active");
        }
    })
};

const fadeInChainObserver = new IntersectionObserver(fadeInChainElement, fadeInOptions);

fadeInTarget.forEach(function (value) {
    fadeInObserver.observe(value);
});

fadeInChainTarget.forEach(function (value) {
    fadeInChainObserver.observe(value);
});

if (document.getElementById('about') != null) {
    /* ----------------------------------------------------------------------------------------------------
   *  about accordion menu
   * --------------------------------------------------------------------------------------------------*/

    const techAccordion = document.querySelectorAll(".accordion-button");

    function accordionToggle() {
        const content = this.nextElementSibling;
        content.classList.toggle("is-open");
        const accordion = this;
        accordion.classList.toggle('is-open');
    }

    for (let i = 0; i < techAccordion.length; i++) {
        techAccordion[i].addEventListener("click", accordionToggle);
    }
}

if (document.getElementById('column-design') != null) {
    const fadeInStickyTarget = document.querySelectorAll('.fade-sticky-target');

    const fadeInStickyOptions = {
        root: null,
        rootMargin: "-25% 0px",
        threshold: 0.5
    };

    const fadeInStickyElement = function (entries, fadeInStickyObserver) {
        entries.forEach((entry, n) => {

            const nowElement = entry.target;

            const element_height = nowElement.getBoundingClientRect().top;

            const window_height = window.innerHeight;

            if (entry.isIntersecting) {
                nowElement.classList.add("active");
            } else if (element_height > window_height - (window_height*1.25)) {
                nowElement.classList.remove("active");
            }
        })
    };

    const fadeInStickyObserver = new IntersectionObserver(fadeInStickyElement, fadeInStickyOptions);

    fadeInStickyTarget.forEach(function (value) {
        fadeInStickyObserver.observe(value);
    });
}