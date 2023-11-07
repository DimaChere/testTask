"use strict";

const openForm = document.getElementsByClassName("contact-sales-btn");
const closeForm = document.getElementsByClassName("close-form");
const sendForm = document.getElementById("send_contact-sales-btn");

const formContainer = document.getElementById("contact-sales-form");
const form = document.getElementById("form-container-2");
const success = document.getElementById("form-success");

const nameField = document.getElementById("name"),
  emailField = document.getElementById("email"),
  phoneField = document.getElementById("phone");

const nameError = document.getElementById("error__name"),
  emailError = document.getElementById("error__email"),
  phoneError = document.getElementById("error__phone"),
  error = document.getElementById("error-fields");

// OPEN FORM ------------------------------------------------------------------------

for (let btn of openForm) {
  btn.addEventListener("click", () => {
    OpenForm();
  });
}

function OpenForm() {
  formContainer.style.visibility = "visible";
}

// CLOSE FORM -----------------------------------------------------------------------
for (let btn of closeForm) {
  btn.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
  });
}

// FIELDS HANDLERS ------------------------------------------------------------------
// error
sendForm.addEventListener("click", () => {
  let isValid = true;

  if (nameField.value === "") {
    nameField.style.border = "1px solid var(--Additional_02, #EC1211)";
    nameError.style.display = "block";
    nameError.textContent = "This field is required.";
    isValid = false;
  }

  if (emailField.value === "") {
    emailField.style.border = "1px solid var(--Additional_02, #EC1211)";

    emailError.style.display = "block";
    emailError.textContent = "This field is required.";
    isValid = false;
  }

  if (phoneField.value === "") {
    phoneField.style.border = "1px solid var(--Additional_02, #EC1211)";

    phoneError.style.display = "block";
    phoneError.textContent = "This field is required.";
    isValid = false;
  }

  if (isValid) {
    formComplited();
  } else {
    error.style.display = "block";
    error.textContent = "Please fill in all required fields";
  }
});

// rewriting
nameField.addEventListener("input", () => {
  if (nameField.value !== "") {
    nameError.textContent = "";
    nameError.style.display = "none";

    nameField.style.border = "1px solid var(--Grayscale_20, #f1f1f1)";
  }

  allFieldsFilled();
});

emailField.addEventListener("input", () => {
  if (nameField.value !== "") {
    emailError.textContent = "";
    emailError.style.display = "none";

    emailField.style.border = "1px solid var(--Grayscale_20, #f1f1f1)";
  }

  allFieldsFilled();
});

phoneField.addEventListener("input", () => {
  if (phoneField.value !== "") {
    phoneError.textContent = "";
    phoneError.style.display = "none";

    phoneField.style.border = "1px solid var(--Grayscale_20, #f1f1f1)";
  }

  allFieldsFilled();
});

function allFieldsFilled() {
  if (
    nameField.value !== "" &&
    nameField.value !== "" &&
    phoneField.value !== ""
  ) {
    error.style.display = "none";
    sendForm.removeAttribute("disabled");
  } else {
    sendForm.setAttribute("disabled", true);
  }
}

// FORM CORRECT ----------------------------------------------------------------------

function formComplited() {
  form.style.display = "none";
  success.style.display = "flex";
}
