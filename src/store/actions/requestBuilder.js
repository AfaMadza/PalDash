import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';

export const setRequest = ( order ) => {
    return {
        type: actionTypes.SET_REQUEST,
        order: order
    };
};