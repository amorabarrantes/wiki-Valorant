import * as model from './model.js';
import entriesView from './views/entriesView.js';
import optionsView from './views/optionsView.js';
import resultsView from './views/resultsView.js'


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

const controlLoadAgent = function (id) {
    try {
        const agent = model.state.agents.find(agent => agent.uuid === id);
        //render agent

        resultsView.render(agent);
    } catch (err) {
        resultsView.renderError();
    }
}

const controlOptionsHash = function (optionId) {
    window.location.hash = `#${optionId}`;
}

const init = function () {
    optionsView.addHandlerClick(controlOptionsHash);
    entriesView.addHandlerRender(controlLoadAll);
    entriesView.addHandlerClick(controlLoadAgent);
}

init();
