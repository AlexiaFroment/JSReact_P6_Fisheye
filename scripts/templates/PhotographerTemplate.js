function photographerTemplate(data) {
  const { name, id, city, country, tagline, price, portrait } = data;
  console.log(data);
  const picture = `assets/photographers/${portrait}`;

  function getPhotographerHeaderDOM() {
    /**
     * Block1: Nom, prénom / Ville, Pays / Tagline
     * Block2: Btn contactez-moi
     * Block3: Photo
     */
    // Block1
    const photographProfile = document.querySelector(".photograph_profile");
    const article = document.createElement("article");
    article.className = "Photograph_presentation";
    // name
    const h2 = document.createElement("h2");
    h2.textContent = name;
    // city and country
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    // tagline
    const p = document.createElement("p");
    p.textContent = tagline;

    // Block3
    const photographImg = document.querySelector(".photograph_img");
    console.log(photographImg);
    // portrait
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.href = name;
    // appendChild
    photographProfile.appendChild(article);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    photographImg.appendChild(img);

    return { photographProfile, photographImg };
  }

  function getUserCardDOM() {
    // Card info
    const article = document.createElement("article");
    article.className = "photographer_art";

    // Link on div (img and H2)
    const a = document.createElement("a");
    a.className = "page-link";
    a.href = `/Front-End-Fisheye/photographer.html?id=${id}`;

    // Div with img and H2
    const div = document.createElement("div");
    div.className = "card-link";

    // Portrait
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    // Name
    const h2 = document.createElement("h2");
    h2.textContent = name;

    // City & Country
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;

    // Tagline
    const p = document.createElement("p");
    p.textContent = tagline;

    // Price
    const span = document.createElement("span");
    span.textContent = `${price}€/jour`;
    // Appendchild
    article.appendChild(a);
    a.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(span);
    return article;
  }
  return {
    name,
    id,
    city,
    country,
    tagline,
    price,
    picture,

    getPhotographerHeaderDOM,
    getUserCardDOM,
  };
}
