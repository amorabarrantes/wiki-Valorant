import { API_AGENT } from './config.js';
import { getJSON } from './helper.js';

export const state = {
    agents: {},
};

export const loadAllAgents = async function (id) {
    try {
        const data = await getJSON(`${API_AGENT}`);

        if (data.status !== 200) throw new Error("There was an error fetching data from API");

        //Delete index 7, cause there's an agent twice (Sova).
        data.data.splice(7, 1)
        state.agents = data.data;
    } catch (err) {
        throw err;
    }
};