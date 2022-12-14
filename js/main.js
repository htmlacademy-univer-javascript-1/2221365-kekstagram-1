import { getRandomPositiveInteger } from './utils.js' ;
import { createPhotos } from './data.js';
import { getThumbnails } from './thumbnails.js';

const data = createPhotos();
getThumbnails(data);
getRandomPositiveInteger();
