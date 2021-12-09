import View from "./View.js";

class OptionsView extends View {
    //5ed6604591c37cdc054bc886
    //5ed6604591c37cdc054bc8f7
    _parentElement = document.querySelector('.header--options');
    _errorMessage = 'Got some problems fetching agents!'
    _message = '';

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.header__option');
            if (!btn) return;

            const { id } = btn.dataset;

            if (+id > 0) {
                this._disableAllActives();
                btn.classList.add('active--option');
                handler(id);
            }

        }.bind(this));
    }

    enableActiveOption(id) {
        this._disableAllActives();
        const options = this._parentElement.querySelectorAll('.header__option');
        options.forEach(opt => {
            +opt.dataset.id === id ? opt.classList.add('active--option') : '';
        });
    }

    _disableAllActives() {
        const options = this._parentElement.querySelectorAll('.header__option');
        options.forEach(opt => opt.classList.remove('active--option'));
    }

}

export default new OptionsView();