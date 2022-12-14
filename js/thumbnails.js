import { openBigPicture } from './big-picture.js';

// const mainContainer = document.querySelector('.js-pictures');

// let photos = [];

// const getPictureTemplate = ({id, url, comments, likes}) => `<a href="#" class="picture js-picture" data-id='${id}'>
// <img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
// <p class="picture__info">
//   <span class="picture__comments">${comments.length}</span>
//   <span class="picture__likes">${likes}</span>
// </p>
// </a>`;

// const getThumbnails = (data) => mainContainer.insertAdjacentHTML('beforeend', data.map((photo) => getPictureTemplate(photo)).join(''));

// const onPictureClick = (evt) => {
//   evt.preventDefault();
//   const target = evt.target;

//   const picture = target.closest('.js-picture');
//   const id = +picture.dataset.id;
//   const [ photo ] = photos.filter((element) => element.id === +id);

//   openBigPicture(photo);
// };

// const initThumbnails = (data) => {
//   photos = data.slice();
//   getThumbnails();
//   const pictures = mainContainer.querySelectorAll('.js-picture');
//   pictures.forEach((picture) => picture.addEventListener('click', onPictureClick));
// };

// export { initThumbnails };

const picturesContainer = document.querySelector('.pictures');

let photos = [];

const getThumbnailTemplate = ({id, url, likes, comments}) => `<a href="#" class="picture js-picture" data-id="${id}">
    <img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
    <p class="picture__info">
      <span class="picture__comments">${comments.length}</span>
      <span class="picture__likes">${likes}</span>
    </p>
  </a>
`;

const onThumbnailClick = (evt) => {
  const target = evt.target;
  const picture = target.closest('.js-picture');
  const id = picture.dataset.id;
  const [ photo ] = photos.filter((element) => element.id === +id);

  openBigPicture(photo);
};

const createThumbnails = () => {
  picturesContainer.insertAdjacentHTML('afterbegin', photos.map((photo) => getThumbnailTemplate(photo)).join(''));
};

const initThumbnails = (data) => {
  photos = data.slice();
  createThumbnails();
  const pictures = picturesContainer.querySelectorAll('.js-picture');
  pictures.forEach((picture) => picture.addEventListener('click', onThumbnailClick));
};

export { initThumbnails };
