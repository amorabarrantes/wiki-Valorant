export default class View {
  _data;

  render(data, clear = true, insert = 'afterbegin') {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (clear) this._clear();

    this._parentElement.insertAdjacentHTML(insert, markup)
  };

  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error">
            <div>
              <img src="https://www.freeiconspng.com/uploads/error-icon-32.png" alt="error-icon">
            </div>
            <p>${message}</p>
          </div>
        `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }

  /* renderSpinner() {
  const markup = `
              <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
            `
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup)
} */

  /*   renderMessage(message = this._message) {
    const markup = `
            <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  } */

}