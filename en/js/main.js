// loader
window.onload = function(){
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        (function ($) {
            $('#loader').removeClass('show');
            $('.loader').addClass('d-none');
        })(jQuery);
        document.querySelector(".text-container").classList.toggle("animathion-name");
        document.querySelector(".logo").classList.toggle("animathion-logo");
        document.querySelector("#go-down").classList.toggle("go-down-animation");
    }, 1800);
});
// menu
document.addEventListener("DOMContentLoaded", () => {
    const openMenuButton = document.querySelector(".btn-open-menu");
    const menu = document.getElementById("menu");
    const closeMenuButton = document.getElementById("closeMenu");
    const menuItems = menu.querySelectorAll("li a");
    const body_Element = document.querySelector("body");
    openMenuButton.addEventListener("click", () => {
        menu.classList.toggle("open");
        body_Element.classList.toggle("over-hidden")
    });
    closeMenuButton.addEventListener("click", () => {
        menu.classList.remove("open");
        body_Element.classList.remove("over-hidden")
    });
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove("open");
        body_Element.classList.remove("over-hidden")
        });
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !openMenuButton.contains(e.target)) {
            menu.classList.remove("open");
        body_Element.classList.remove("over-hidden")
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});