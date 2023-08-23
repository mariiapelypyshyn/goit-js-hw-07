import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const renderList = (arr, container) => {
    const markup = arr.map(
        (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`).join("");

    container.insertAdjacentHTML("afterbegin", markup);
};

renderList(galleryItems, galleryList);

function modalOpen(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const clickedImg = event.target;

    const chosenImgSource = clickedImg.getAttribute("data-source");

    const galleryItem = galleryItems
        .find(item => item.original === chosenImgSource);
    if (galleryItem) {
        console.log(galleryItem.original);
    };

    const instance = basicLightbox.create(`
		<div class="modal">
    <img src="${galleryItem.original}"
     data-source="${galleryItem.original}"/>
 </div>`)
    
    instance.show();

    // window.addEventListener("keydown", closeModalEsc);
};

// function closeModalEsc(event) {
//     if (event.code === 'Escape') {
//         instance.close();
//         window.removeEventListener("keydown", closeModalEsc)
//     }
// };


galleryList.addEventListener("click", modalOpen);