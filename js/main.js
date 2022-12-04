const getRandomNumber = (max, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkMaxLenght = (testableStr, maxLenght) => {
  if (typeof testableStr !== 'string') {
    testableStr = String(testableStr);
  }
  return testableStr.lenght <= maxLenght;
};
