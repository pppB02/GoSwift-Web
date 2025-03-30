const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");
const html = document.getElementById("html");
const body = document.getElementById("body");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    html.classList.toggle("active");
    body.classList.toggle("active");
})