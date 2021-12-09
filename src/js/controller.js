import * as model from './model.js';
import entriesView from './views/entriesView.js';
import optionsView from './views/optionsView.js';


const controlLoadAll = async function () {
    try {
        const id = +window.location.hash.slice(1);
        if (!id) return;
        optionsView.enableActiveOption(id)
        if (id === 1) {

            await model.loadAllAgents();
            entriesView.render(model.state.agents);
            return;
        }

        entriesView.renderError("Error fetching data, try again!");


    } catch (err) {
        console.log(err);
        entriesView.renderError();
    }
}

const controlOptionsHash = function (optionId) {
    window.location.hash = `#${optionId}`;
}

const init = function () {
    entriesView.addHandlerRender(controlLoadAll);
    optionsView.addHandlerClick(controlOptionsHash)

}

init();
