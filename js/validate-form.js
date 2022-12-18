import { checkStringLength, isEscapeKey } from './utils.js';
import { MAX_HASHTAGS_COUNT, MAX_HASHTAGS_LENGTH, MAX_DESCRIPTION_LENGTH } from './const.js';

const HASHTAGS_RE = /^#[A-za-zА-Яа-яЁё\d]{1,19}$/;

const uploadModal = document.querySelector('.img-upload');
const uploadForm = uploadModal.querySelector('.img-upload__form');
const descriptionField = uploadForm.querySelector('[name="description"]');
const hashtagsField = uploadForm.querySelector('[name="hashtags"]');


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text',
});

const arrayContainsElement = (array, element) => array.indexOf(element) >= 0;

const validateHashtagsCount = (value) => (value === '') ? true : value.split(' ').length <= MAX_HASHTAGS_COUNT;

const validateHashtagFormat = (value) => (value === '') ? true : value.split(' ').every((hashtag) => HASHTAGS_RE.test(hashtag));

const anyElementIsDuplicated = (array) => {
  const temp = array.slice();
  const length = temp.length;
  for (let i = 0; i < length; i++) {
    const element = temp[0];
    temp.splice(0, 1);
    if (arrayContainsElement(temp, element)) {
      return true;
    }
  }
  return false;
};

const validateDuplicateHashtag = (value) => (value === '') ? true : !anyElementIsDuplicated(value.toLowerCase().split(' '));

pristine.addValidator(
  hashtagsField,
  validateDuplicateHashtag,
  'Один и тот же хэш-тег не может быть использован дважды. Хэш-теги нечувствительны к регистру.',
  //2
);

pristine.addValidator(
  hashtagsField,
  validateHashtagFormat,
  `Хэш-тэги должны быть вида #hashtag и разделены пробелами. Максимальная длинна хэш-тега: ${MAX_HASHTAGS_LENGTH}.`,
  // 3
);

pristine.addValidator(
  hashtagsField,
  validateHashtagsCount,
  `Нельзя указать больше ${MAX_HASHTAGS_COUNT} хэш-тегов.`,
  // 1
);

pristine.addValidator(
  descriptionField,
  (description) => checkStringLength(description, MAX_DESCRIPTION_LENGTH),
  `До ${MAX_DESCRIPTION_LENGTH} символов (включительно).`
);

descriptionField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

hashtagsField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

