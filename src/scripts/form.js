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

  const PERIOD_OF_DAY = {
    manha: "Manhã",
    tarde: "Tarde",
    noite: "Noite",
  };

  const formData = new FormData(event.target);
  const name = formData.get("name").trim();
  const whatsapp = formData
    .get("phone")
    .trim()
    .replace(/\s+/g, "")
    .replace(/\D/g, "");
  const time = PERIOD_OF_DAY[formData.get("time").trim()];
  const business = formData.get("business").trim();
  const submitButton = event.target.querySelector('button[type="submit"]');

  //Ensure that all fields exists
  if (!name || !whatsapp || !time || !business) {
    showToast("Preencha todos os campos", "error");
    return;
  }

  if (whatsapp.replace(/\D/g, "").length < 11) {
    showToast("Por favor, insira um número de WhatsApp válido", "error");
    return;
  }

  //Catch first name
  const splittedName = name.split(" ");
  const firstName = splittedName[0];

  const PUBLIC_KEY = "f3LDmr1kXGdaw7wyC";
  const SERVICE_ID = "service_exluv3h";
  const TEMPLATE_ID = "template_inshvq8a";

  try {
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    emailjs.init({
      publicKey: PUBLIC_KEY,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name,
      whatsapp,
      time,
      business,
    });

    showToast(`${firstName}, obrigado pelo contato!`, "success");

    event.target.reset();
  } catch (error) {
    console.error("Erro ao enviar o formulário:", error);
    showToast("Ocorreu um erro ao enviar o formulário.", "error");
    return;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Quero Agendar Minha Ligação";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (form) form.addEventListener("submit", handleFormSubmit);
});
