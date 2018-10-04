import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import classes from './RequestSummary.css';

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
            <Aux className={classes.RequestSummary}>
                <h3 className={classes.welcome}>Your Order</h3>
                <p className={classes.subtitle}>Delivery Details:</p>
                <ul className={classes.noBullets}>
                    {requestSummary}
                </ul>
                <p className={classes.pCenter}>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.requestCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.requestContinued}>Continue</Button>
            </Aux>
        );
    }
}

export default RequestSummary;