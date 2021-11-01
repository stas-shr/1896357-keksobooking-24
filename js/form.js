const form = document.querySelector('.ad-form');
const fieldset = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFilter = mapFilters.querySelectorAll('.map__filter');

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  fieldset.forEach((fieldest) => {
    fieldest.disabled = false;
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFilter.forEach((filter) => {
    filter.disabled = false;
  });
};

const diactivateForm = () => {
  form.classList.add('ad-form--disabled');
  fieldset.forEach((fieldest) => {
    fieldest.disabled = true;
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFilter.forEach((filter) => {
    filter.disabled = true;
  });
};

export {activateForm, diactivateForm};
