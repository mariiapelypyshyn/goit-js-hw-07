import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const renderList = (arr, container) => {
    const markup = arr.map(
        (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`).join("");

    container.insertAdjacentHTML("afterbegin", markup);
};

renderList(galleryItems, galleryList);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});








