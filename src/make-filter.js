export default (caption, checked = false) => `<input
          type="radio"
          id="filter-${caption.toLowerCase()}"
          name="filter"
          value="${caption.toLowerCase()}"
          ${checked ? `checked` : ``}
        />
        <label for="filter-${caption.toLowerCase()}" class="trip-filter__item"
          >${caption} </label
        >`;