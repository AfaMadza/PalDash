import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orderData: null,
    error: false,
    building: false
};

const setRequest = (state, action) => {
    return updateObject( state, {
        orderData: {
            name: action.orderData.name,
            address: action.orderData.address,
            street: action.orderData.street,
            country: action.orderData.country,
            zipCode: action.orderData.zipCode,
            contact: action.orderData.contact
        },
        error: false,
        building: true
    } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_REQUEST: return setRequest(state, action);    
        default: return state;
    }
};

export default reducer;