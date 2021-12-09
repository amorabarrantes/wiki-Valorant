import * as model from './modal.js';


const firstTest = async function () {
    await model.loadAllAgents();
    const box = document.querySelector('.main__body--entries');
    const agents = model.state.agents;

    console.log(agents);
    const markup = agents.map(agent => {
        return `<div class="body--entrie">
                    <a class="agent">AGENT: ${agent.displayName}</a>
                </div>`
    }).join(',').replaceAll(',', '');

    console.log(markup);


    box.insertAdjacentHTML('afterbegin', markup);
}

firstTest();
