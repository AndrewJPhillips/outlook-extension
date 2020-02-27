import {
    GET_MATTERS
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

};