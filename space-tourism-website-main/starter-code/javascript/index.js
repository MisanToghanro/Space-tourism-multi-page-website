
const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".menu");
const menuIcon = document.querySelector("#menu-icon")


if(menuButton && navMenu && menuIcon) {
    menuButton.addEventListener("click" , () => {
              navMenu.classList.toggle("open");

              if(navMenu.classList.contains("open")) {
                 menuIcon.src = "./assets/shared/icon-close.svg";
                 menuIcon.alt = "Close menu";
                 
              }else {
                 menuIcon.src = "./assets/shared/icon-hamburger.svg";
                 menuIcon.alt = "Open menu"
              }

    })
}