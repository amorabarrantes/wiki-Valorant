import * as model from './model.js';
import abilitiesView from './views/abilitiesView.js';
import entriesView from './views/entriesView.js';
import optionsView from './views/optionsView.js';
import resultAgentsView from './views/resultAgentsView.js'

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
        model.state.currentAgent = agent;
        //render agent
        resultAgentsView.render(agent);
    } catch (err) {
        resultAgentsView.renderError();
    }
}

const controlOptionsHash = function (optionId) {
    window.location.hash = `#${optionId}`;
}

const controlAbilities = function (abilitieName) {
    try {
        const abilitie = model.state.currentAgent.abilities.find(abilitie => abilitie.displayName === abilitieName);
        abilitiesView.render(abilitie, false, 'beforeend');
    } catch (err) {
        abilitiesView.renderError(err);
    }

}

const init = function () {
    optionsView.addHandlerClick(controlOptionsHash);
    entriesView.addHandlerRender(controlLoadAll);
    entriesView.addHandlerClick(controlLoadAgent);
    resultAgentsView.addHandlerClickAbilities(controlAbilities)
}

init();
