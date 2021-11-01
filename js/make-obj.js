import {createObj} from './data.js';

const OFFER_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const template = document.querySelector('#card').content.querySelector('.popup');
const mapBlock = document.querySelector('.map__canvas');
const fragment = document.createDocumentFragment();
const objElement = template.cloneNode(true);
const hideElement = (className) => objElement.querySelector(className).classList.add('hidden');
const addContent = (content, classObj) => {
  if (content) {
    objElement.querySelector(classObj).textContent = content;
  } else {
    hideElement(classObj);
  }
};

const renderObj = ({author, offer}) => {
  const popupFeaturesList = objElement.querySelector('.popup__features').querySelectorAll('.popup__feature');

  addContent(offer.title, '.popup__title');
  addContent(offer.address, '.popup__text--address');

  if (offer.price) {
    objElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    hideElement('.popup__text--price');
  }

  addContent(OFFER_TYPES[offer.type], '.popup__type');

  if (offer.rooms && offer.guests) {
    objElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    hideElement('.popup__text--capacity');
  }

  if (offer.checkin && offer.checkout) {
    objElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    hideElement('.popup__text--time');
  }

  if (offer.features) {
    popupFeaturesList.forEach((popupFeaturesItem) => {
      const isNecessary = offer.features.some(
        (objFeature) => popupFeaturesItem.classList.contains(`popup__feature--${objFeature}`),
      );

      if (!isNecessary) {
        popupFeaturesItem.remove();
      }
    });
  } else {
    hideElement('.popup__features');
  }

  addContent(offer.description, '.popup__description');

  const popupPhotosContainer = objElement.querySelector('.popup__photos');
  const popupPhotos = popupPhotosContainer.querySelector('.popup__photo');

  if (offer.photos) {
    offer.photos.forEach((objPhoto) => {
      const popupPhotosCopy = popupPhotos.cloneNode(true);
      popupPhotosCopy.src = objPhoto;
      popupPhotosContainer.appendChild(popupPhotosCopy);
      popupPhotos.remove();
    });
  } else {
    hideElement('.popup__photos');
  }

  const addSrc = (content, classObj) => {
    if (content) {
      objElement.querySelector(classObj).src = content;
    } else {
      hideElement(classObj);
    }
  };

  addSrc(author.avatar, '.popup__avatar');

  fragment.appendChild(objElement);
};

const addObj = (index) => {
  renderObj(createObj([index]));
  mapBlock.appendChild(fragment);
};

export {addObj};
