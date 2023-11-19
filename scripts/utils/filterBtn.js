/**
 * Btn dropdow
 * ❌ icon doesn't change for the moment
 */
const dropdown = document.querySelector(".dropdown");
const btnDrop = document.querySelector(".bloc_top");
const icon = document.querySelector(".bloc_top .icon");
// const icon = document.querySelector(".icon i");

let toggleIndex = 0;

btnDrop.addEventListener("click", () => {
  if (toggleIndex === 0) {
    dropdown.style.height = `${dropdown.scrollHeight}px`;
    icon.style.transform = "rotate(-180deg)";
    toggleIndex++;
  } else {
    dropdown.style.height = `${btnDrop.scrollHeight}px`;
    icon.style.transform = "rotate(0deg)";
    toggleIndex--;
  }
});
