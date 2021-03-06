/* eslint-disable no-unused-vars */
// src https://myrusakov.ru/js-random-numbers.html
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// src https://myrusakov.ru/js-random-numbers.html с доработкой из https://stackoverflow.com/questions/17726753/get-a-random-number-between-0-0200-and-0-120-float-numbers
const getRandomFloat = (min, max, floatNuber) => (Math.random() * (max - min) + min).toFixed(floatNuber);

const getArray = (elements) => {
  const maxElements = elements.length;
  const lengthOfArray = getRandomInRange(1, maxElements);
  const newArray = [];

  while (newArray.length < lengthOfArray) {
    const indexOfElement = getRandomInRange(0, maxElements - 1);
    const element = elements[indexOfElement];

    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const getPhotos = (mainLink, photos) => {
  const maxPhotos = photos.length;
  const lengthOfArray = getRandomInRange(1, maxPhotos);
  const newArray = [];

  while (newArray.length < lengthOfArray) {
    const indexOfPhoto = getRandomInRange(0, maxPhotos - 1);
    const photo = `${mainLink }${photos[indexOfPhoto]}`;

    if (!newArray.includes(photo)) {
      newArray.push(photo);
    }
  }
  return newArray;
};

const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

export {getRandomInRange, getRandomFloat, getArray, getRandomArrayElement, getPhotos};
