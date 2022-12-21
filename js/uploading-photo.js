const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const uploadImgInput = document.querySelector('.img-upload #upload-file');
const preview = document.querySelector('.img-upload__preview img');

const uploadUserPhoto = () => {
  const file = uploadImgInput.files[0];
  const fileName = file.name.toLowerCase();

  const typeMatches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (typeMatches) {
    preview.src = URL.createObjectURL(file);
  }
};

export { uploadUserPhoto };
