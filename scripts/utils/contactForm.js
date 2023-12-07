const modalContainer = document.querySelector(".modal_form");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const body = document.querySelector("#body");
const main = document.querySelector("#main");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const messageInput = document.querySelector("textarea");

const validationIcons = document.querySelectorAll(".check-icon");
const errorMsg = document.querySelectorAll(".error-msg");
const form = document.querySelector("form");
const btnSubmit = document.querySelector(".submit_button");

const inputsValidity = {
  fName: false,
  lName: false,
  mail: false,
  message: false,
};
let isAnimated = false;

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

// ❌ doesn't work, look for the good event
closeBtn.addEventListener("keydown", closeModal);
function closeModal() {
  console.log("keydown !");
  modalContainer.remove("active");
}

function toggleModal() {
  modalContainer.classList.toggle("active");
  // closeBtn.focus();
  if (modalContainer.classList.contains("active")) {
    body.classList.add("no-scroll");
    main.ariaHidden = "true";
    modalContainer.ariaHidden = "false";
    closeBtn.focus();
  } else {
    body.classList.remove("no-scroll");
    main.ariaHidden = "false";
    modalContainer.ariaHidden = "true";
    form.reset();
  }
}
// closeBtn.addEventListener("click", closeModal);
// function closeModal() {
//   console.log("ferme");
//   // modalContainer.style.visibility = "hidden";
// }

firstName.addEventListener("input", firstNameValidation);
firstName.addEventListener("blur", firstNameValidation);

function firstNameValidation() {
  if (firstName.value.length >= 3) {
    showValidation({ index: 0, validation: true });
    inputsValidity.fName = true;
  } else {
    showValidation({ index: 0, validation: false });
    inputsValidity.fName = false;
  }
}

lastName.addEventListener("input", lastNameValidation);
lastName.addEventListener("blur", lastNameValidation);

function lastNameValidation() {
  if (lastName.value.length >= 3) {
    showValidation({ index: 1, validation: true });
    inputsValidity.lName = true;
  } else {
    showValidation({ index: 1, validation: false });
    inputsValidity.lName = false;
  }
}

email.addEventListener("input", mailValidation);
email.addEventListener("blur", mailValidation);
function mailValidation() {
  if (regexEmail.test(email.value)) {
    showValidation({ index: 2, validation: true });
    inputsValidity.mail = true;
  } else {
    showValidation({ index: 2, validation: false });
    inputsValidity.mail = false;
  }
}

messageInput.addEventListener("input", messageValidation);
messageInput.addEventListener("blur", messageValidation);

function messageValidation() {
  if (messageInput.value.length >= 10) {
    showValidation({ index: 3, validation: true });
    inputsValidity.message = true;
  } else {
    showValidation({ index: 3, validation: false });
    inputsValidity.message = false;
  }
}

function showValidation({ index, validation }) {
  if (validation) {
    validationIcons[index].style.display = "inline";
    validationIcons[index].src = "../assets/icons/check.svg";
    errorMsg[index].style.display = "none";
  } else {
    validationIcons[index].style.display = "inline";
    validationIcons[index].src = "../assets/icons/error.svg";
    errorMsg[index].style.display = "block";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const keys = Object.keys(inputsValidity);
  console.log(inputsValidity);
  const failedInputs = keys.filter((key) => !inputsValidity[key]);
  console.log(failedInputs, btnSubmit);

  if (failedInputs.length && !isAnimated) {
    isAnimated = true;
    btnSubmit.classList.add("shake");
    setTimeout(() => {
      btnSubmit.classList.remove("shake");
      isAnimated = false;
    }, 400);
    failedInputs.forEach((input) => {
      const index = keys.indexOf(input);
      showValidation({ index: index, validation: false });
    });
  } else {
    console.log(`
    prénom : ${firstName.value}
    nom : ${lastName.value}
    email : ${email.value}
    message : ${messageInput.value} `);
    toggleModal();
    form.reset();
  }
});
