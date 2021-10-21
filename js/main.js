// src https://myrusakov.ru/js-random-numbers.html
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// src https://myrusakov.ru/js-random-numbers.html с доработкой из https://stackoverflow.com/questions/17726753/get-a-random-number-between-0-0200-and-0-120-float-numbers
function getRandomFloat(min, max, floatNuber) {
  return (Math.random() * (max - min) + min).toFixed(floatNuber);
}

const MIN_USERS = 1;
const MAX_USERS = 9;

const MIN_PRICE = 1000;
const MAX_PRICE = 10000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUESTS = 0;
const MAX_GUESTS = 6;

const TITLE = 'Аренда помещения';

const DESCRIPTIONS = [
  'Сдам уютное помещение для порядочных жильцов.',
  'Срочно требуется жилец!',
  'Сдам жилье.',
  'Аренда помещения.',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const ALL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const getAvatar = () => `img/avatars/user0${getRandomInRange(MIN_USERS, MAX_USERS)}.png`;

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

const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

const locationLat = getRandomFloat(35.65000, 35.70000, 5);
const locationLng = getRandomFloat(139.70000, 139.80000, 5);

const createObj = () => ({
  author: {
    avatar: getAvatar,
  },
  offer: {
    title: TITLE,
    address: `Адрес по координатам: ${  locationLat  } и ${  locationLng}`,
    price: getRandomInRange(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomInRange(MIN_ROOMS, MAX_ROOMS),
    guests: getRandomInRange(MIN_GUESTS, MAX_GUESTS),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getArray(ALL_FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getArray(ALL_PHOTOS),
  },
  location: {
    lat: locationLat,
    lng: locationLng,
  },
});

const similarObj = Array.from({length: MAX_USERS}, createObj);

similarObj;
