import makeFilter from './make-filter.js';
import makeTask from './make-trip.js';
import getRandomTask from './random-trip.js';

const tripFilter = document.querySelector(`.trip-filter`);
const tripDayItems = document.querySelector(`.trip-day__items`);

tripFilter.insertAdjacentHTML(`beforeend`, makeFilter(`Everything`, true));
tripFilter.insertAdjacentHTML(`beforeend`, makeFilter(`Future`));
tripFilter.insertAdjacentHTML(`beforeend`, makeFilter(`Past`));

const renderTrips = (tag) => {
  const randomTask = getRandomTask(5, 1);
  for (let i = 0; i < randomTask; i++) {
    tag.insertAdjacentHTML(`beforeend`, makeTask(`icon`, `Taxi to Airport`, `10:00`, `11:00`, `1h 30s`, `20`, [`order1`, `order2`]));
  }
};

renderTrips(tripDayItems);

const filterEverything = document.querySelector(`#filter-everything`);
const filterFuture = document.querySelector(`#filter-future`);
const filterPast = document.querySelector(`#filter-past`);


const changeTrips = () => {
  const tripPoints = document.querySelectorAll(`.trip-point`);
  tripPoints.forEach(function (trip) {
    trip.remove();
  });
  renderTrips(tripDayItems);
};

filterEverything.addEventListener(`click`, () => {
  changeTrips();
});

filterFuture.addEventListener(`click`, () => {
  changeTrips();
});

filterPast.addEventListener(`click`, () => {
  changeTrips();
});
