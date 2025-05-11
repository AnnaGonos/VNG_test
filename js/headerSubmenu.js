document.addEventListener("DOMContentLoaded", function () {
    const headerMenu = document.querySelector(".header__menu");
    const headerRight = document.querySelector(".header__right");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuInner = document.querySelector(".mobile-menu__inner");
    const burgerButton = document.querySelector(".header__burger");
    const closeButton = document.querySelector(".mobile-menu__close");

    function updateLayout() {
        if (window.innerWidth < 770) {
            if (!mobileMenuInner.contains(headerMenu)) {
                mobileMenuInner.appendChild(headerMenu);
            }
            if (!mobileMenuInner.contains(headerRight)) {
                mobileMenuInner.appendChild(headerRight);
            }
        } else {
            const headerContainer = document.querySelector(".header__container");
            if (!headerContainer.contains(headerMenu)) {
                headerContainer.appendChild(headerMenu);
            }
            if (!headerContainer.contains(headerRight)) {
                headerContainer.appendChild(headerRight);
            }
        }
    }

    updateLayout();

    window.addEventListener("resize", updateLayout);

    burgerButton.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    closeButton.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});
