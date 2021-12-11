import View from "./View.js";

class EntriesView extends View {
    //5ed6604591c37cdc054bc886
    //5ed6604591c37cdc054bc8f7
    _parentElement = document.querySelector('.main__body--entries');
    _errorMessage = 'Got some problems fetching agents!'
    _message = '';

    addHandlerRender(handler) {
        const events = ['hashchange', 'load']
        events.forEach(ev => window.addEventListener(ev, handler));
    }

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.body--entrie');
            //console.log(e.target);
            if (!btn) return;

            const agent = btn.querySelector('.agent');
            const { id } = agent.dataset;
            handler(id);
        });
    }

    /*     addHandlerUpdateServings(handler) {
            this._parentElement.addEventListener('click', function (e) {
                const btn = e.target.closest('.btn--update-servings');
                if (!btn) return;
     
                const { updateTo } = btn.dataset;
     
                if (+updateTo > 0) {
                    handler(+updateTo);
                }
     
            });
        } */

    /*     addHandlerAddBookmark(handler) {
            this._parentElement.addEventListener('click', function (e) {
                const btn = e.target.closest('.btn--bookmark');
                if (!btn) return;
                handler();
            });
        } */

    _generateMarkup() {
        const markup = this._data.map(agent => {
            return `<div class="body--entrie">
                        <span class="agent" data-id="${agent.uuid}">${agent.displayName}</span>
                    </div>`
        }).join(',').replaceAll(',', '');
        return markup;
    }

}

export default new EntriesView();