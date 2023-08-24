import { galleryFoto } from './gallery-foto.js';

const openModar = document.querySelector('.icon-hear');
const closeModar = document.querySelector('.footer-modal-close');
const footerModal = document.querySelector('.footer-modal');
const footerFoto = document.querySelector('.footer-foto');

openModar.addEventListener('click', function(e) {
    e.preventDefault();
    footerModal.classList.add('active');
    footerFoto.insertAdjacentHTML('beforeend', itemsMarkup);
    // const imegEl = galleryItems.map(makegalleryItems);
    // footerFoto.append(...imegEl);

    // const fs = require('fs');
    // const images = fs.readdirSync('./images');
    // console.log(images)

})
const itemsMarkup = makeGalleryItems(galleryFoto);

function makeGalleryItems(items) {
    return items.map(({ preview, name, position }) => {
      return `
        <li class=footer-item>
            <div class="footer-foto-img">
                <img
                    class="footer-foto-image"
                    src="${preview}"
                    alt="${position}"
                    width="360"
                />
            </div>   
            <h2>${name}</h2> 
            <p>${position}</p>
        </li>
    `
    }).join('');
}

// const makegalleryItems = ({preview, name, position}) => {
//     const galleryItemEl = document.createElement('li');
//     galleryItemEl.classList.add('footer-item');

//     const gallerylinkEl = document.createElement('div');
//     gallerylinkEl.classList.add('footer-foto-img');
    
//     const imgItemEl = document.createElement('img');
//     imgItemEl.classList.add('footer-foto-image');
//     imgItemEl.src = preview;
//     imgItemEl.alt = position;
//     imgItemEl.width="360";

//     const h2 = document.createElement('h2');
//     h2.textContent = name;
//     const p = document.createElement('p');
//     p.textContent = position;

//     gallerylinkEl.append(imgItemEl);
//     galleryItemEl.append(gallerylinkEl);
//     galleryItemEl.append(h2);
//     galleryItemEl.append(p);
//     return galleryItemEl;
// }

closeModar.addEventListener('click',() => {
    footerModal.classList.remove('active');
    footerFoto.innerHTML = '';
});

window.addEventListener('keydown', function(e) {
    if (e.code === 'Escape') {
        footerModal.classList.remove('active');
        footerFoto.innerHTML = '';
    }
});
window.addEventListener('click', function(e) {
    // console.dir(e.target.className)
    if ((e.target.className === 'footer-contaiter') || (e.target.className === 'footer-modal active')) {
        footerModal.classList.remove('active');
        footerFoto.innerHTML = '';
    }
});
