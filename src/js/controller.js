import * as model from './model.js';
import abilitiesView from './views/abilitiesView.js';
import entriesView from './views/entriesView.js';
import optionsView from './views/optionsView.js';
import resultsView from './views/resultsView.js'

const controlLoadAllResults = async function () {
    try {
        resultsView.clear();
        const id = +window.location.hash.slice(1);
        if (!id) return;
        optionsView.enableActiveOption(id)

        if (id === 1) {
            await model.loadAllAgents();
            entriesView.render(model.state.agents);
            return;
        }
        if (id === 2) {
            await model.loadAllMaps();
            entriesView.render(model.state.maps);
            return;
        }
        entriesView.renderError("Error fetching data, try again!");
    } catch (err) {
        console.log(err);
        entriesView.renderError();
    }
}

const controlLoadEntrie = function (id, hash) {
    try {
        if (hash === 1) {
            const agent = model.state.agents.find(agent => agent.uuid === id);
            model.state.currentAgent = agent;
            //render agent
            resultsView.render(agent);
        }

        if (hash === 2) {
            const map = model.state.maps.find(map => map.uuid === id);
            resultsView.render(map)
        }

    } catch (err) {
        console.log(err);
        resultsView.renderError();
    }
}

const controlOptionsHash = function (optionId) {
    window.location.hash = `#${optionId}`;
}

const controlAbilities = function (abilitieName) {
    try {
        const abilitie = model.state.currentAgent.abilities.find(abilitie => abilitie.displayName === abilitieName);
        console.log(abilitie);
        abilitiesView.render(abilitie, 'beforeend');
    } catch (err) {
        abilitiesView.renderError(err);
    }

}

const init = function () {
    optionsView.addHandlerClick(controlOptionsHash);
    resultsView.addHandlerClickAbilities(controlAbilities);
    entriesView.addHandlerClick(controlLoadEntrie);
    const events = ['hashchange', 'load']
    events.forEach(ev => window.addEventListener(ev, controlLoadAllResults));
}

init();
