/**
 *
 * Récupérer l'id du photographe passé dans l'URL => getId()
 * Créer template des infos à afficher sur la page photographe =>use PhotographerTemplate.js
 * Afficher les datas via le template => displayData()
 */
const params = new URLSearchParams(document.location.search);
const id = params.get("id");

async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  const photographers = await response.json();
  return photographers;
}

async function displayData(photographers) {
  const indexPhotographer = photographers.findIndex(
    (photographer) => photographer.id == id
  );
  const photographer = photographers[indexPhotographer];
  const photographerHeader = document.querySelector("#main .photograph_header");
  console.log(photographerHeader);
  const photographerModel = photographerTemplate(photographer);
  const photographerCardHeaderDom =
    photographerModel.getPhotographerHeaderDOM(photographer);
  photographerHeader.appendChild(photographerCardHeaderDom);
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}
init();
