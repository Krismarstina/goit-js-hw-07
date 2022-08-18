import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const template = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}"> 
     <img class="gallery__image" src="${preview}"  data-source="${original}" alt="${description}"/>
     </a>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", template);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
