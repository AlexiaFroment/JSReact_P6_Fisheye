function mediaFactory(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;
  const img = `assets/medias/${image}`;
  const mp4 = `assets/medias/${video}`;

  function getMediasMainDOM() {
    const article = document.createElement("article");
    article.className = `card`;

    //  Create 2 Objects imgCard & mp4Card
    const media = document.createElement("div");
    if (video == undefined) {
      const picture = document.createElement("img");
      picture.className = `media_img`;
      picture.setAttribute("src", img);
      media.appendChild(picture);
    } else {
      const film = document.createElement("video");
      film.className = `media_mp4`;
      film.setAttribute("src", mp4);
      media.appendChild(film);
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
