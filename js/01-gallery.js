import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("div.gallery");
const pictures = galleryItems
  .map((element) => {
    const image = `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
    return image;
  })
  .join(" ");
gallery.insertAdjacentHTML("afterbegin", pictures);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const dataImg = event.target.getAttribute("data-source");
  const altImg = event.target.getAttribute("alt");
  const instance = basicLightbox.create(
    `
    <img src="${dataImg}" alt="${altImg}" />
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") instance.close();
        });
      },
    }
  );
  instance.show();
});
