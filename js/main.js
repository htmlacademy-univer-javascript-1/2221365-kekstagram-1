import { createPhotos } from './data.js';
import { initThumbnails } from './thumbnails.js';
import './form.js';
import './validate-form.js';

const data = createPhotos();
initThumbnails(data);

