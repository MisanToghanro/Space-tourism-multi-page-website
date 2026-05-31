
const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".menu");


if(menuButton && navMenu) {
    menuButton.addEventListener("click" , () => {
              navMenu.classList.toggle("open");

    })
}