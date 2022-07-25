import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");
const pictures = galleryItems
  .map((element) => {
    const image = `<a class="gallery__item" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
      title="${element.description}"
    />
  </a>`;
    return image;
  })
  .join(" ");

gallery.insertAdjacentHTML("afterbegin", pictures);

new SimpleLightbox(".gallery a", { captionDelay: 250 });
