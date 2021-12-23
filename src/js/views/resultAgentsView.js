import View from "./View.js";

class ResultAgentsView extends View {
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

  addHandlerClickAbilities(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const abilitie = e.target.closest('.abilitie--icon');
      if (!abilitie) return;

      if (abilitie.classList.contains("active--abilitie")) {
        this._removeAllAbilitiesActive();
        const parent = document.querySelector('.body__result--abilities-description');
        parent.remove();
        return;
      };

      this._removeAllAbilitiesActive();
      this._removeAllAbilitiesDisplayed();
      abilitie.classList.add('active--abilitie');

      const { abilitiename: abilitieName } = abilitie.dataset;
      handler(abilitieName)
    }.bind(this))
  }

  _generateMarkup() {
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
          <div class="body__result--abilities-info">
            <div class="abilities--label"><span>Abilities</span></div>
            <div class="abilities--icons">
            ${this._data.abilities.map(abilitie => this._generateAbilitiesMarkup(abilitie)).join("")}
            </div>
          </div>
        </div>
        `
    return markup;
  }

  _generateAbilitiesMarkup(abilitie) {
    if (!abilitie.displayIcon) return;
    const markup = `
              <img
                src="${abilitie.displayIcon ?? ""}"
                alt="abilitie-${abilitie.displayName}"
                class="abilitie--icon"
                data-abilitieName="${abilitie.displayName}"
              />
            `
    return markup;
  }

  _removeAllAbilitiesActive() {
    const options = this._parentElement.querySelectorAll('.abilitie--icon');
    options.forEach(opt => opt.classList.remove('active--abilitie'));
  }

  _removeAllAbilitiesDisplayed() {
    const parents = document.querySelectorAll('.body__result--abilities-description');
    parents.forEach(el => el.remove());
  }

}

export default new ResultAgentsView();