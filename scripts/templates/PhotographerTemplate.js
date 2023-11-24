function photographerTemplate(data) {
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/${portrait}`;

  function getNameIntoModal() {
    const h3 = document.createElement("h3");
    h3.textContent = name;

    return h3;
  }

  // Header photographer page => infos
  function getInfoHeader() {
    // Block1 => name,location,tagline
    // name
    const div = document.createElement("div");
    div.className = "photograph_infos";

    const h2 = document.createElement("h2");
    h2.textContent = name;
    // location = city and country
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    // tagline
    const p = document.createElement("p");
    p.textContent = tagline;

    // appendChild
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);

    return div;
  }

  // Header photographer page => img
  function getImgHeader() {
    // Block3 => img
    const div = document.createElement("div");
    div.className = "photograph_img";

    // portrait;
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.alt = name;

    // appendChild
    div.appendChild(img);

    return div;
  }

  // Index page => list of photographers
  function getUserCardDOM() {
    // Article is container
    const article = document.createElement("article");
    article.className = "photographer_art";

    // First part => link on name and photo
    const a = document.createElement("a");
    a.className = "page-link";
    // a.href = `/Front-End-Fisheye/photographer.html?id=${id}`;
    a.href = `/photographer.html?id=${id}`;
    // Div with img and H2
    const div = document.createElement("div");
    div.className = "card-link";
    // Portrait
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    // Name
    const h2 = document.createElement("h2");
    h2.textContent = name;

    // Second part => location (city and country), tagline and price
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
    getNameIntoModal,
    getInfoHeader,
    getImgHeader,
    getUserCardDOM,
  };
}
