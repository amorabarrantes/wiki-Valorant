import View from "./View.js";

class AbilitiesView extends View {
    _parentElement = '';
    _errorMessage = 'Got some problems fetching the abilitie description!'
    _message = '';

    _generateMarkup() {
        this._parentElement = document.querySelector('.body--result');
        const markup = `
          <div class="body__result--abilities-description" a>
            <div class="abilities--label"><span>${this._data.displayName}</span></div>
            <div class="abilities--icons">
            ${this._data.description}
            </div>
          </div>
        `
        return markup;
    }
}

export default new AbilitiesView();