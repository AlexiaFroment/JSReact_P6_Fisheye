// async function getPhotographers() {
//   let photographers = [];
//   await fetch("data/photographers.json")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (value) {
//       photographers = value.photographers;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   console.log(photographers);
//   return { photographers: [...photographers] };
// }

async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  // console.log(response);
  const photographers = await response.json();
  // console.log(photographers);

  return photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  // console.log(photographers);
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
