import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class RequestSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[RequestSummary] WillUpdate');
    }

    render () {
        let requestSummary = <p>No Requests Yet</p>;
        if (this.props.orderData) {
            requestSummary = Object.keys( this.props.orderData )
            .map( itemKey => {
                return (
                    <li key={itemKey}>
                        <span style={{ textTransform: 'capitalize' }}>{itemKey}</span>: {this.props.orderData[itemKey]}
                    </li> );
            } );
        }
        console.log('[RequestSummary]:', requestSummary);
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