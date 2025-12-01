const toggleMenu = () => {
  const menuHamburger = document.getElementById("hamburguer-menu");
  const closeButton = document.getElementById("close-button");
  const sidebar = document.getElementById("sidebar");

  menuHamburger.addEventListener("click", () => {
    sidebar.style.right = "0";
  });

  closeButton.addEventListener("click", () => {
    sidebar.style.right = "-100%";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
});
