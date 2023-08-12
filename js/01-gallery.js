import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery')
console.log(galleryContainer)

function createMarkup(pictures) {
    return pictures.map((picture) => {
       return `<li class="gallery__item">
  <a class="gallery__link" href="${picture.original}">
    <img
      class="gallery__image"
      src="${picture.preview}"
      data-source="${picture.original}"
      alt="${picture.discription}"
    />
  </a>
</li>`}).join("");
  
}


const addGalleryMarkup = createMarkup(galleryItems)
// console.log(addGalleryMarkup)

galleryContainer.innerHTML = addGalleryMarkup;
console.log(galleryContainer)



galleryContainer.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault()

  if (evt.target.nodeName !== "IMG") {
    return
  }

      const instance = basicLightbox.create(`
		<img width="800" height="600" src="${evt.target.dataset.source}">
	`)
      instance.show()
  
      galleryContainer.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
          instance.close()
        }
      })

    }
