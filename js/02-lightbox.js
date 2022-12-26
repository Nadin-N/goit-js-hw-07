import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const createGalleryMarkUp = (array) =>
	array
		.map(
			({ preview, original, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
		)
		.join("");

const showMarkup = () => {
	galleryListEl.innerHTML = createGalleryMarkUp(galleryItems);
};
showMarkup();

const onGalleryListClick = (event) => {
	event.preventDefault();
	const lightbox = new SimpleLightbox(".gallery a", {
		captionsData: "alt",
		captionPosition: "bottom",
		captionDelay: 250,
	});
};

galleryListEl.addEventListener("click", onGalleryListClick);
