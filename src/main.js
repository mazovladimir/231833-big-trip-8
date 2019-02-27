import makeFilter from './make-filter.js';
import makeTask from './make-task.js';


const tripFilter = document.querySelector(`.trip-filter`);


tripFilter.insertAdjacentHTML(`beforeend`, makeFilter(`Everything`, true));
tripFilter.insertAdjacentHTML(`beforeend`, makeFilter(`Future`));
tripFilter.insertAdjacentHTML(`beforeend`, makeFilter(`Past`));

const tripDayItems = document.querySelector(`.trip-day__items`);

tripDayItems.insertAdjacentHTML(`beforeend`, makeTask('icon', 'Taxi to Airport', '10:00', '11:00', '1h 30s', '20', ['order1', 'order2']));

