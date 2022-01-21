export default class View {
  _data;

  render(data, insert = 'afterbegin',) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;

    const hash = +window.location.hash.slice(1);
    const markup = this._generateMarkup(hash);

    this.clear();

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
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }

  clear() {
    this._parentElement.innerHTML = '';
  }
}