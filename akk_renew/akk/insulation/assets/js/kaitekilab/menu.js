const body = document.querySelector("body");
const nav = document.querySelector("nav");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("hamburger-menu-btn");
const hamburgerMenuContainer = document.getElementById("hamburger-menu-container");
const hamburgerMenuContainerSp = document.getElementById("hamburger-menu-container-sp");
let targetHamburgerMenu = null;

let hamburgerMenuLinkItemTitleSp = document.getElementsByClassName("hamburger-menu-link-item-title-sp");
let hamburgerMenuLinkItemContainerSp = document.getElementsByClassName("hamburger-menu-link-item-container-sp");
let hamburgerMenuLinkHeight = 32;
let dict = {};

// const topScrollBtn = document.getElementById("top-scroll");

window.addEventListener("load", () => {
        if (menuBtn.checked) {
            menuBtn.checked = false;
        }
    }
)

for (let i = 0; i < hamburgerMenuLinkItemTitleSp.length; i++) {
    dict[i] = hamburgerMenuLinkItemContainerSp[i].children.length * hamburgerMenuLinkHeight;
    hamburgerMenuLinkItemTitleSp[i].addEventListener("click", () => {
        if (!hamburgerMenuLinkItemContainerSp[i].classList.contains("open")) {
            hamburgerMenuLinkItemContainerSp[i].classList.add("open");
            hamburgerMenuLinkItemContainerSp[i].style.height = `${dict[i]}px`
        } else {
            hamburgerMenuLinkItemContainerSp[i].style.height = "0";
            hamburgerMenuLinkItemContainerSp[i].classList.remove("open");

        }
    })
}

menuBtn.addEventListener("change", () => {
    targetHamburgerMenu = hamburgerMenuContainer ? hamburgerMenuContainer : hamburgerMenuContainerSp;
    if (menuBtn.checked) {
        menu.classList.add("d-block")
        menu.classList.remove("menu-close");
        menu.classList.add("menu-show");
        targetHamburgerMenu.classList.add(("d-block"))

        if (window.innerWidth >= 576) {
            body.classList.add("overflow-hidden");
        } else {
            targetHamburgerMenu.classList.add("overflow-scroll");
        }
    } else {
        nav.classList.add("position-fixed");
        menu.classList.remove("menu-show")
        menu.classList.add("menu-close");
        targetHamburgerMenu.classList.remove("block")
        if (body.classList.contains("overflow-hidden")) {
            body.classList.remove("overflow-hidden");
        }
        if (targetHamburgerMenu.classList.contains("overflow-scroll")) {
            targetHamburgerMenu.classList.remove("overflow-scroll");
        }
    }
})
menu.addEventListener('animationend', () => {
    if (!menuBtn.checked) {
        menu.classList.remove("d-block")
    }
});

// topScrollBtn.addEventListener("click", () => {
//         scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         })
//     }
// )
//
// let timer = null;
// window.addEventListener("scroll", () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         if (window.scrollY >= 10) {
//             if (!topScrollBtn.classList.contains("show")) {
//                 topScrollBtn.classList.add("show");
//             }
//         } else {
//             if (topScrollBtn.classList.contains("show")) {
//                 topScrollBtn.classList.remove("show");
//             }
//         }
//     }, 100)
// })

let href = document.querySelectorAll("a[href^='#']");
let SCROLL_MARGIN = 24; // ページ内スクロールの余白
for (let i = 0; i < href.length; i++) {
    href[i].addEventListener("click", (e) => {
        e.preventDefault();
        let targetHash = null;
        let targetElement = null;

        if (e.target.hash) {
            targetHash = e.target.hash;
        } else if (e.target.dataset.pageUrl) {
            targetHash = e.target.dataset.pageUrl
        }

        if (targetHash) {
            targetElement = document.querySelector(targetHash);
            let scrollPosition = targetElement.offsetTop - nav.offsetHeight - SCROLL_MARGIN;
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            })
        }
    })
}
