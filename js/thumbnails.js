const getPictureTemplate = ({url, comments, likes}) => `<a href="#" class="picture">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const mainContainer = document.querySelector('.js-pictures');

const getThumbnails = (data) => mainContainer.insertAdjacentHTML('beforeend', data.map((photo) => getPictureTemplate(photo)).join(''));

export { getThumbnails };

