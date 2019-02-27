import makeFilter from './make-filter.js';

const filters = document.querySelector(`.trip-filter`);

filters.insertAdjacentHTML(`beforeend`, makeFilter(`Everything`, true));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Future`));
filters.insertAdjacentHTML(`beforeend`, makeFilter(`Past`));