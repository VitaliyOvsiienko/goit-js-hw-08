import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

const cardsGallery = createGalleryCards(galleryItems);
galleryDiv.insertAdjacentHTML('beforeend', cardsGallery);

function createGalleryCards(items) {
    return items.map(({ preview, original, description }) => {
        return ` 
    <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoom: false,
    }
);
