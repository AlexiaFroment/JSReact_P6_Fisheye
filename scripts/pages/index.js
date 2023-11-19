async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  const photographers = await response.json();
  return photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDetails = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDetails);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
