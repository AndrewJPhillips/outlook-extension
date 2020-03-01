import {
    GET_MATTERS,
    REMOVE_MATTER,
    SELECT_MATTER,
    READ_MATTER
} from "actions/matters/types";


const defaultState = {
    mattersList: [],
    selectedId: -1
};
/**
 * @description the matter store
 * @param {array} state
 * @param {object} action
 * @returns {*}
 */
export default (state=defaultState, action) => {

    let mattersList;
    switch (action.type) {
        case GET_MATTERS:
            return {...state, mattersList: action.payload};
        case REMOVE_MATTER:
            mattersList = state.mattersList.filter(matter => matter.id !== action.payload.id);
            return {...state, mattersList};
        case SELECT_MATTER:
            return {...state, selectedId: action.payload};
        case READ_MATTER:
            mattersList = state.mattersList.map(matter => {
                if(matter.id === action.payload.id) matter.readStatus = true;
                return matter;
            });
            return {...state, mattersList};
        default:
            return state;
    }
}