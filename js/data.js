import {getRandomInRange, getRandomFloat, getArray, getRandomArrayElement} from './util.js';

const MIN_PRICE = 1000;
const MAX_PRICE = 10000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUESTS = 0;
const MAX_GUESTS = 6;

const ALL_AVATARS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

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


const LOCATION_LAT_X = 35.65000;
const LOCATION_LAT_Y = 35.70000;
const LOCATION_LNG_X = 139.70000;
const LOCATION_LNG_Y = 139.80000;
const LOCATION_DIGITS = 5;


const createObj = () => {
  const locationLat = getRandomFloat(LOCATION_LAT_X, LOCATION_LAT_Y, LOCATION_DIGITS);
  const locationLng = getRandomFloat(LOCATION_LNG_X, LOCATION_LNG_Y, LOCATION_DIGITS);

  return {
    author: {
      avatar: `img/avatars/user${ALL_AVATARS.shift()}.png`,
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
  };
};

export {createObj};
