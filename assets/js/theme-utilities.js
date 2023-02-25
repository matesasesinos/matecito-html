const menu = document.querySelector("#menu-open");
const closeMenu = document.querySelector(".close-menu");

if (typeof menu != undefined && menu != null) {
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#menu-container").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector("#menu-container").classList.remove("opacity-0");
      document.querySelector("#menu-container").classList.add("grid");
    }, 200);
  });
}

if (typeof closeMenu != undefined && closeMenu != null) {
  closeMenu.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#menu-container").classList.add("opacity-0");
    setTimeout(() => {
      document.querySelector("#menu-container").classList.remove("grid");
      document.querySelector("#menu-container").classList.add("hidden");
    }, 200);
  });
}
