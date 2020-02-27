import {
    GET_MATTERS,
    REMOVE_MATTER
} from "actions/matters/types";

/**
 * @param {array} state
 * @param {object} action
 * @returns {Array}
 */
export default (state = [], action) => {

    switch (action.type) {
        case GET_MATTERS:
            return action.payload;
        case REMOVE_MATTER:
            return state.filter(matter => matter.id !== action.payload.id);
        default:
            return state;
    }
}