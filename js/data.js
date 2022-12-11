import {getRandomPositiveInteger} from './utils.js';
import {AVATAR, MESSAGE, NAMES, MAX_PHOTO, DESCRIPTION, LIKES} from './const.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${(getRandomPositiveInteger(AVATAR.MIN, AVATAR.MAX))}.svg`,
  message: MESSAGE[getRandomPositiveInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createUserData = (id) => ({
  id,
  url: `photos/${getRandomPositiveInteger(1, MAX_PHOTO)}.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(LIKES.MIN, LIKES.MAX),
  comments: createComment(id)
});

const createPhotosArray = Array.from({length: 25}).map((element, index) => (element = createUserData(index + 1)));

createPhotosArray();

export {createPhotosArray};
