function photographerTemplate(data) {
  // const { name, portrait } = data;
  const { name, portrait, city, country, tagline, price } = data;
  // console.log(name, portrait);
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
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
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(span);
    return article;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
  // return { name, picture, city, country, tagline };
}
