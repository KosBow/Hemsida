// var typed = new Typed(".auto-type", {
//   strings: ["Gamer.", "Student.", "Programmerare."],
//   typeSpeed: 120,
//   backSpeed: 120,
//   loop: true,
// });

const menu_btn = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile-nav");
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMenuButtonClick() {
  menu_btn.classList.toggle("is-active");

  if (menu_btn.classList.contains("is-active") && mediaQuery.matches) {
    mobile_nav.style.display = "block";
  } else {
    mobile_nav.style.display = "none";
    menu_btn.classList.remove("is-active");
  }
}

function handleWindowResize() {
  if (!mediaQuery.matches) {
    mobile_nav.style.display = "none";
    menu_btn.classList.remove("is-active");
  }
}

handleMenuButtonClick();
menu_btn.addEventListener("click", handleMenuButtonClick);
window.addEventListener("resize", handleWindowResize);
