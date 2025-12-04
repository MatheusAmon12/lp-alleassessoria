const toggleMenu = () => {
  const menuHamburger = document.getElementById("hamburguer-menu");
  const closeButton = document.getElementById("close-button");
  const sidebar = document.getElementById("sidebar");
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      sidebar.style.right = "-100%";
    });
  });

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
