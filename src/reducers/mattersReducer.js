
/**
 * @description
 * @param state
 * @param action
 * @returns {Array}
 */
export default (state=[], action) => {

    switch(action.type) {
        case 'GET_MATTERS':
            return action.payload;
        case 'REMOVE_MATTER':
            return state.filter(matter => matter.id !== action.payload.id);
        default:
            return state;
    }
}