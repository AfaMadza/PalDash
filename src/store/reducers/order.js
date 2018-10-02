import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    requested: false
};

const requestInit = ( state, action ) => {
    return updateObject( state, { requested: false } );
};

const requestDeliveryStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const requestDeliverySuccess = ( state, action ) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        requested: true,
        orders: state.orders.concat( newOrder )
    } );
};

const requestDeliveryFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.REQUEST_INIT: return requestInit( state, action );
        case actionTypes.REQUEST_DELIVERY_START: return requestDeliveryStart( state, action );
        case actionTypes.REQUEST_DELIVERY_SUCCESS: return requestDeliverySuccess( state, action )
        case actionTypes.REQUEST_DELIVERY_FAIL: return requestDeliveryFail( state, action );
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state, action );
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state, action );
        default: return state;
    }
};

export default reducer;