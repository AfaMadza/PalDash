import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';

export const setRequest = ( orderData ) => {
    return {
        type: actionTypes.SET_REQUEST,
        orderData: orderData
    };
};