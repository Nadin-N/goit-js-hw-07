import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const createGalleryMarkUp = (array) =>
	array
		.map(
			({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
		)
		.join("");

const showMarkup = () => {
	galleryListEl.innerHTML = createGalleryMarkUp(galleryItems);
};
showMarkup();

const showGallery = (event) => {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}

	const currentBigPictureUrl = event.target.dataset.source;

	const instance = basicLightbox.create(
		`
		<img width="1400" height="900" src="${currentBigPictureUrl}">
	`
	);
	instance.show();

	const EscapeClose = (event) => {
		if (event.code === "Escape") {
			instance.close();
			galleryListEl.removeEventListener("keydown", EscapeClose);
		}
	};
	galleryListEl.addEventListener("keydown", EscapeClose);
};

galleryListEl.addEventListener("click", showGallery);
