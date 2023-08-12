import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery')
console.log(galleryContainer)

function createMarkup(pictures) {
    return pictures.map((picture) => {
       return `<li class="gallery__item">
  <a class="gallery__link" href="${picture.original}">
    <img
      class="gallery__image"
      src="${picture.preview}"
      alt="${picture.description}"
    />
  </a>
</li>`}).join("");
 
} 

const addGalleryMarkup = createMarkup(galleryItems)
console.log(addGalleryMarkup);

galleryContainer.innerHTML = addGalleryMarkup;
console.log(galleryContainer);


const lightbox = new SimpleLightbox('.gallery a', { 
  caption: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
    captionDelay: '250'
  });
console.log(lightbox)