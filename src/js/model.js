import { API_AGENT } from './config.js';
import { getJSON } from './helper.js';

export const state = {
    agents: {},
    currentAgent: {}
};

export const loadAllAgents = async function () {
    try {
        const data = await getJSON(`${API_AGENT}`);

        if (data.status !== 200) throw new Error("There was an error fetching data from API");

        //Delete index 7, cause there's an agent twice (Sova).
        data.data.splice(6, 1)
        //console.log(data.data);
        state.agents = data.data;
    } catch (err) {
        throw err;
    }
};

/* export const loadAgent = async function (id) {
    try {
        const data = await getJSON(`${API_AGENT$}${id}`);

        if (data.status !== 200) throw new Error("There was an error fetching data from API");

        //Delete index 7, cause there's an agent twice (Sova).
        data.data.splice(7, 1)
        state.agents = data.data;
    } catch (err) {
        throw err;
    }   
}; */