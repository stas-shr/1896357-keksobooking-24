import {createObj} from './data.js';

const MAX_USERS = 10;

const similarObj = Array.from({length: MAX_USERS}, createObj);

similarObj;

// eslint-disable-next-line no-console
console.log(similarObj);
