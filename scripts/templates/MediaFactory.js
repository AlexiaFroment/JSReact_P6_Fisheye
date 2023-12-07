function mediaFactory(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;

  function getMediasMainDOM() {
    const article = document.createElement("article");
    article.className = `card`;

    //  Create 2 Objects imgCard & mp4Card
    const media = document.createElement("div");
    if (video == undefined) {
      const picture = document.createElement("img");
      picture.className = `media_img`;
      picture.src = `assets/medias/${image}`;
      picture.alt = title;
      media.appendChild(picture);
      media.addEventListener("click", toggleCarroussel);
    } else {
      const film = document.createElement("video");
      film.className = `media_mp4`;
      film.src = `assets/medias/${video}`;
      film.alt = title;
      media.appendChild(film);
      media.addEventListener("click", toggleCarroussel);
    }

    // Section title and likes
    const content = document.createElement("div");
    content.className = `info`;
    const titleArt = document.createElement("span");
    titleArt.className = "title_photo";
    titleArt.textContent = title;
    const likesArt = document.createElement("span");
    likesArt.className = "likes_photo";
    likesArt.textContent = `${likes} ♥`;

    // AppendChild
    // photographerMedias.appendChild(article);
    article.appendChild(media);
    article.appendChild(content);
    content.appendChild(titleArt);
    content.appendChild(likesArt);

    return article;
  }

  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,

    getMediasMainDOM,
  };
}
