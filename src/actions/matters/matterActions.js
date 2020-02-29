import {
    GET_MATTERS,
    SELECT_MATTER
} from "./types";
import {
    getMatters as apiGetMatters
} from 'api/matters';

/**
 * @description Returns the matters
 * @returns {Function}
 */
export const getMatters = () => async dispatch => {

    const payload = await apiGetMatters();

    dispatch({
        type: GET_MATTERS,
        payload
    });

    if(payload.length) {
        dispatch({
            type: SELECT_MATTER,
            payload: payload[0]['id']
        });
    }

};

/**
 * @description
 * @param id
 * @returns {{payload: *, type: string}}
 */
export const selectMatter = id => ({
    type: SELECT_MATTER,
    payload: id
});