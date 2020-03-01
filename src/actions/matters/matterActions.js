import {
    GET_MATTERS,
    SELECT_MATTER,
    READ_MATTER
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
        const {id} = payload[0];
        dispatch({
            type: SELECT_MATTER,
            payload: id
        });
        dispatch({
            type: READ_MATTER,
            payload: id
        });
    }

};

/**
 * @description Will select a matter to read
 * @param {integer} id - the matter id
 * @returns {{payload: *, type: string}}
 */
export const selectMatter = id => ({
    type: SELECT_MATTER,
    payload: id
});


/**
 * @description Will mark a matter as read
 * @param {integer} id - the matter id
 * @returns {{payload: *, type: string}}
 */
export const readMatter = id => ({
    type: READ_MATTER,
    payload: id
});