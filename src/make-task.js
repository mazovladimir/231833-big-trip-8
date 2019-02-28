export default (icon, title, starttime, endtime, duration, price, offers) => 
`
    <article class="trip-point">
        <i class="trip-icon">${icon}</i>
        <h3 class="trip-point__title">${title}</h3>
        <p class="trip-point__schedule">
            <span class="trip-point__timetable">${starttime}&nbsp;&mdash; ${endtime}</span>
            <span class="trip-point__duration">${duration}</span>
        </p>
        <p class="trip-point__price">&euro;&nbsp;${price}</p>
        ${createOffers(offers)}
    </article>
`

let createOffers = (offers) =>
        `<ul class="trip-point__offers">
            ${offers.map(offer =>`
                <li>
                    <button class="trip-point__offer">
                        ${offer}
                    </button>
                 </li>`).join(``)}
        </ul>`


