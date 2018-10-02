import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const requestDeliverySuccess = ( id, orderData ) => {
    return {
        type: actionTypes.REQUEST_DELIVERY_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const requestDeliveryFail = ( error ) => {
    return {
        type: actionTypes.REQUEST_DELIVERY_SUCCESS,
        error: error
    };
}

export const requestDeliveryStart = () => {
    return {
        type: actionTypes.REQUEST_DELIVERY_START
    };
};

export const requestDelivery = ( orderData, token ) => {
    return dispatch => {
        dispatch( requestDeliveryStart() );
        axios.post( '/orders.json?auth=' + token, orderData )
            .then( response => {
                console.log( response.data );
                dispatch( requestDeliverySuccess( response.data.name, orderData ) );
            } )
            .catch( error => {
                dispatch( requestDeliveryFail( error ) );
            } );
    };
};

export const requestInit = () => {
    return {
        type: actionTypes.REQUEST_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        const  queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        dispatch(fetchOrdersStart());
        axios.get( '/orders.json' + queryParams)
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            } );
    };
};