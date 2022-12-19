import { isEscapeKey } from './utils.js';
import { setSlider, addEffectsListClickHandler, removeEffectsListClickHandler } from './photo-effects.js';
import { changeImageScale, addZoomButtonsClickHandlers, removeZoomButtonsClickHandlers, DEFAULT_SCALE_VALUE } from './photo-scale.js';

const renderUploadModal = document.querySelector('.img-upload');
const uploadFileInput = renderUploadModal.querySelector('#upload-file');
const uploadOverlay = renderUploadModal.querySelector('.img-upload__overlay');
const modalCloseButton = renderUploadModal.querySelector('#upload-cancel');

const closeUploadingModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  modalCloseButton.removeEventListener('click', closeUploadingModal);
  document.removeEventListener('keydown', onModalEscKeydown);
  removeEffectsListClickHandler();
  removeZoomButtonsClickHandlers();
};

const openUploadingModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  modalCloseButton.addEventListener('click', closeUploadingModal);
  document.addEventListener('keydown', onModalEscKeydown);
  addEffectsListClickHandler();
  changeImageScale(DEFAULT_SCALE_VALUE);
  addZoomButtonsClickHandlers();
  setSlider('none');
};

function onModalEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeUploadingModal();
  }
}

uploadFileInput.addEventListener('change', () => {
  openUploadingModal();
});

export { openUploadingModal };
