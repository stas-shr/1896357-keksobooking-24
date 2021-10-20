/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// src https://myrusakov.ru/js-random-numbers.html
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// src https://myrusakov.ru/js-random-numbers.html с доработкой из https://stackoverflow.com/questions/17726753/get-a-random-number-between-0-0200-and-0-120-float-numbers
function getRandomFloat(min, max, floatNuber) {
  return (Math.random() * (max - min) + min).toFixed(floatNuber);
}

function getRandom(random) {
  return Math.floor(Math.random() * random);
}

const getAvatar = () => {
  const avatarNumber = getRandomInRange(1, 10);
  if (avatarNumber >= 10) {
    return `img/avatars/user${avatarNumber}.png`;
  }
  return `img/avatars/user${`0${  avatarNumber}`}.png`;
};

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const checkin = [
  '12:00',
  '13:00',
  '14:00',
];

const checkout = [
  '12:00',
  '13:00',
  '14:00',
];

const allFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

function getArray(elements) {
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
}

const allPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

const OBJ_COUNT = 10;

const createObj = () => ({
  author: {
    avatar: getAvatar,
  },
  offer: {
    title: 'Аренда помещения',
    address: `Адрес по координатам: ${  getRandomFloat(35.65000, 35.70000, 5)  } и ${  getRandomFloat(139.70000, 139.80000, 5)}`,
    price: getRandomInRange(1000, 10000),
    type: getRandomArrayElement(type),
    rooms: getRandomInRange(1, 5),
    guests: getRandomInRange(2, 7),
    checkin: getRandomArrayElement(checkin),
    checkout: getRandomArrayElement(checkout),
    features: getArray(allFeatures),
    description: 'Сдам уютное помещение для порядочных жильцов.',
    photos: getArray(allPhotos),
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  },
});

const similarObj = Array.from({length: OBJ_COUNT}, createObj);

console.log(similarObj);

