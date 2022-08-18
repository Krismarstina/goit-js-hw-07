import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const template = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
     <a class="gallery__link" href="${original}"> 
     <img class="gallery__image" src="${preview}"  data-source="${original}" alt="${description}"/>
     </a>
     </div>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", template);

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const largeImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img class="gallery__image" src="${largeImageUrl}"/>`
  );

  instance.show();
}

document.addEventListener("keydown", (evt) => {
  const onModal = document.querySelector(".basicLightbox");
  if (evt.key === "Escape") {
    onModal.remove();
  }
});
