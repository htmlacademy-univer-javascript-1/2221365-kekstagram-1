const NAMES = ['Вячеслав', 'Эвелина', 'Анастасия', 'Максим', 'Артём', 'Евгений', 'Елена', 'Екатерина', 'Павел', 'Арсений', 'Эмилия', 'Егор'];

const DESCRIPTION = [
  'Все только начинает становиться действительно хорошим.',
  'Сегодня я проснулась вот так ? А вы ?',
  'Я никогда ничего не теряю. Я либо побеждаю, либо узнаю что-то новое.',
  'Выходные, пожалуйста, не оставляйте меня сейчас!',
  'Мне нравится и улыбаюсь!',
  'Я просто увидел самого умного человека в мире, когда смотрел в зеркало.' ];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!' ];

const AVATAR = {
  MIN: 1,
  MAX: 6
};

const LIKES = {
  MIN: 15,
  MAX: 200
};

const MAX_PHOTO = 25;

function checkStringLength (string, length) {
  return string.length <= length;
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

checkStringLength('yretg', 3);
