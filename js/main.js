import { initThumbnails } from './thumbnails.js';
import { getData } from './api.js';
import { showAlert, showSuccessUploadMessage, showErrorUploadMessage } from './form.js';
import {setUserFormSubmit} from './validate-form.js';

getData(
  (pictures) => {
    initThumbnails(pictures);
  },
  () => {
    showAlert('Не удалось загрузить данные. Перезагрузите страницу либо попробуйте позже, мы уже исправляем это!');
  });

setUserFormSubmit(
  () => {
    showSuccessUploadMessage();
  },
  () => {
    showErrorUploadMessage();
  }
);
