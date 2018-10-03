import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class RequestSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[RequestSummary] WillUpdate');
    }

    render () {
        let requestSummary = <p>No Requests Yet</p>;
        if (this.props.order) {
            requestSummary = Object.keys( this.props.order.orderData ).map( itemKey => {
                return (
                    <li key={itemKey}>
                        <span style={{ textTransform: 'capitalize' }}>{itemKey.replace(/([A-Z])/g, ' $1').trim()}: {this.props.order.orderData[itemKey]}</span>
                    </li> );
            } );
        }
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Delivery Details:</p>
                <ul>
                    {requestSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.requestCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.requestContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default RequestSummary;