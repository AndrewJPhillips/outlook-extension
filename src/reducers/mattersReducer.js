import {
    GET_MATTERS,
    REMOVE_MATTER,
    SELECT_MATTER
} from "actions/matters/types";


const defaultState = {
    mattersList: [],
    selectedId: -1
};
/**
 *
 * @param {array} state
 * @param {object} action
 * @returns {*}
 */
export default (state=defaultState, action) => {

    switch (action.type) {
        case GET_MATTERS:
            return {...state, mattersList: action.payload};
        case REMOVE_MATTER:
            const mattersList = state.mattersList.filter(matter => matter.id !== action.payload.id);
            return {...state, mattersList};
        case SELECT_MATTER:
            return {...state, selectedId: action.payload};
        default:
            return state;
    }
}