const phoneMask = (value) => {
  const cleanedValue = value.replace(/\D/g, "");

  let maskedValue = "";

  if (cleanedValue.length > 0) {
    maskedValue += "(" + cleanedValue.substring(0, 2) + ")";
  }
  if (cleanedValue.length >= 3) {
    maskedValue += " " + cleanedValue.substring(2, 7);
  }
  if (cleanedValue.length >= 8) {
    maskedValue += "-" + cleanedValue.substring(7, 11);
  }

  return maskedValue;
};

document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.querySelector('input[name="phone"]');

  if (phoneInput) {
    phoneInput.addEventListener("input", (event) => {
      event.target.value = phoneMask(event.target.value);
    });
  }
});
