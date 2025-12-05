const toggleMenu = () => {
  const menuHamburger = document.getElementById("hamburguer-menu");
  const closeButton = document.getElementById("close-button");
  const sidebar = document.getElementById("sidebar");
  const navItems = document.querySelectorAll(".nav-item");

  const openSidebar = () => {
    sidebar.classList.remove("translate-x-full");
    document.body.classList.add("body-no-scroll");
  };

  const closeSidebar = () => {
    sidebar.classList.add("translate-x-full");
    document.body.classList.remove("body-no-scroll");
  };

  menuHamburger.addEventListener("click", openSidebar);
  closeButton.addEventListener("click", closeSidebar);

  navItems.forEach((item) => {
    item.addEventListener("click", closeSidebar);
  });
};

document.addEventListener("DOMContentLoaded", toggleMenu);
