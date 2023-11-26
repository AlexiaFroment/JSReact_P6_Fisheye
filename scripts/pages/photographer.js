/**
 *
 * Récupérer l'id du photographe passé dans l'URL => getId()
 * Créer template des infos à afficher sur la page photographe =>use PhotographerTemplate.js
 * Afficher les datas via le template => displayData()
 */
const params = new URLSearchParams(document.location.search);
const id = params.get("id");

async function getData() {
  const response = await fetch("./data/photographers.json");
  const data = await response.json();
  return data;
}

// Header part
async function displayHeaderPhotographer(photographers) {
  // Get index photographer
  const indexPhotographer = photographers.findIndex((data) => data.id == id);
  // Find photographer by index
  const photographer = photographers[indexPhotographer];
  const nameModal = document.querySelector("#contact-name");
  nameModal.innerHTML = photographer.name;
  // Display Data
  const photographHeader = document.querySelector("#main .photograph_header");
  const photographModel = photographerTemplate(photographer);
  const photographDetails = photographModel.getInfoHeader();
  const photographImg = photographModel.getImgHeader();
  // Appendchild
  photographHeader.appendChild(photographDetails);
  photographHeader.appendChild(photographImg);
}

async function displayMedias(medias) {
  //  filter photographerId
  const mediasToDisplay = medias.filter((media) => id == media.photographerId);
  const photographerMedias = document.querySelector(".medias_container");

  mediasToDisplay.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDetails = mediaModel.getMediasMainDOM();
    photographerMedias.appendChild(mediaCardDetails);
  });
}

async function init() {
  const { photographers, media } = await getData();
  displayHeaderPhotographer(photographers);
  displayMedias(media);
}
init();
