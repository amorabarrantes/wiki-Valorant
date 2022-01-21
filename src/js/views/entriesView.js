import View from "./View.js";

class EntriesView extends View {
    _parentElement = document.querySelector('.main__body--entries');
    _errorMessage = 'Got some problems fetching entries!'
    _message = '';

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.body--entrie');

            if (!btn) return;

            if (btn.classList.contains("active--entrie")) {
                this._removeAllEntriesActive();
                const parent = document.querySelector('.body--result');
                parent.remove();
                return;
            };

            this._removeAllEntriesActive();
            this._removeAllEntriesDisplayed();

            btn.classList.add('active--entrie');

            //Get entrie id to display
            const entrie = btn.querySelector('.entrie');
            const { id } = entrie.dataset;

            //Get hash
            const hash = +window.location.hash.slice(1);
            if (!hash) return;

            handler(id, hash);
        }.bind(this));
    }

    _generateMarkup(option) {
        if (option === -1) return;
        const markup = this._data.map(entrie => {
            return `<div class="body--entrie">
                            <span class="entrie" data-id="${entrie.uuid}">${entrie.displayName}</span>
                        </div>`
        }).join(',').replaceAll(',', '');
        return markup;
    }

    _removeAllEntriesActive() {
        const options = this._parentElement.querySelectorAll('.body--entrie');
        options.forEach(opt => opt.classList.remove('active--entrie'));
    }

    _removeAllEntriesDisplayed() {
        const parents = document.querySelectorAll('.body--result');
        parents.forEach(el => el.remove());
    }

}

export default new EntriesView();