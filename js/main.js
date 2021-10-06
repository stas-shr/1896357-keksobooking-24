// src https://myrusakov.ru/js-random-numbers.html 
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(1, 10);

// src https://myrusakov.ru/js-random-numbers.html с доработкой из https://stackoverflow.com/questions/17726753/get-a-random-number-between-0-0200-and-0-120-float-numbers
function getRandomFloat(min, max, floatNuber) {
  return (Math.random() * (max - min) + min).toFixed(floatNuber);
}
getRandomFloat(11, 101, 2);