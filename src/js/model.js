import { API_AGENTS, API_MAPS } from './config.js';
import { getJSON } from './helper.js';

export const state = {
    agents: {},
    currentAgent: {},
    maps: {},
    currentMap: {}
};

export const loadAllAgents = async function () {
    try {
        const data = await getJSON(`${API_AGENTS}`);

        if (data.status !== 200) throw new Error("There was an error fetching data from API");

        //Delete index 7, cause there's an agent twice (Sova).
        data.data.splice(6, 1)
        //console.log(data.data);
        state.agents = data.data;
    } catch (err) {
        throw err;
    }
};

export const loadAllMaps = async function () {
    try {
        const data = await getJSON(`${API_MAPS}`);

        if (data.status !== 200) throw new Error("There was an error fetching data from API");

        state.maps = data.data;
    } catch (err) {
        throw err;
    }
};