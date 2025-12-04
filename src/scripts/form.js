// Its create a dynamic toast
const showToast = (message, type = "success") => {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  //Ensure toast is visible for 3 seconds
  setTimeout(() => {
    toast.style.animation = "fadeOut 0.3s ease-out forwards";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
};

const handleFormSubmit = (event) => {
  //Its prevents default form action
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name").trim();
  const whatsApp = formData.get("phone").trim();
  const time = formData.get("time").trim();
  const business = formData.get("business").trim();

  const body = document.querySelector("body");

  //Ensure that all fields exists
  if (!name || !whatsApp || !time || !business) {
    showToast("Preencha todos os campos", "error");
    return;
  }

  if (whatsApp.replace(/\D/g, "").length < 11) {
    showToast("Por favor, insira um número de WhatsApp válido", "error");
    return;
  }

  //Catch first name
  const splittedName = name.split(" ");
  const firstName = splittedName[0];

  event.target.reset();

  showToast(`${firstName}, obrigado pelo contato!`, "success");
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (form) form.addEventListener("submit", handleFormSubmit);
});
