import View from "./View.js";

class ResultsView extends View {
    /*  fullPhoto  =  fullPortrait
        description = description
        displayName = displayName
        abilities = abilities
        role-name = role.displayName
        role-description = role.description
        role-icon = role.displayIcon */

    _parentElement = document.querySelector('.main__body--results');
    _errorMessage = 'Got some problems fetching the result!'
    _message = '';

    _generateMarkup() {
        console.log(this._data);
        const markup = `
        <div class="body--result">
          <div class="body__result--general-info">
            <span class="result--name">${this._data.displayName}</span>
            <img
              class="result--photo"
              src="${this._data.fullPortrait}"
              alt="icon-${this._data.displayName}"
            />
            <div class="result--right-container">
              <div class="right--container-role">
                <span>${this._data.role.displayName}</span>
                <img
                  class="result--role-icon"
                  src="${this._data.role.displayIcon}"
                  alt="${this._data.displayName}-role-icon"
                />
              </div>
              <p class="result--description">${this._data.description}</p>
            </div>
          </div>
        </div>
        `
        return markup;
    }

}

export default new ResultsView();