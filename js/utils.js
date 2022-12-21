const checkStringLength = (str, maxLength) => str.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

export { isEscapeKey, checkStringLength };
