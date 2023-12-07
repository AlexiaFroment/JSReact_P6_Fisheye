/**
 * Create function openCarroussel
 * 3 btns must be active on click and tab
 * Photo or video appear
 */

const modalCarroussel = document.querySelector(".modal_carroussel");
const closeCarroussel = document.querySelector(".close_carroussel");
const slider = document.querySelector(".slider");

closeCarroussel.addEventListener("click", toggleCarroussel);

function toggleCarroussel() {
  modalCarroussel.classList.toggle("active");
  if (modalCarroussel.classList.contains("active")) {
    body.classList.add("no-scroll");
    main.ariaHidden = "true";
    modalCarroussel.ariaHidden = "false";
    closeCarroussel.focus();
  } else {
    body.classList.remove("no-scroll");
    main.ariaHidden = "false";
    modalCarroussel.ariaHidden = "true";
  }
}
