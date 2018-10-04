import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../../components/UI/Button/Button';
import classes from './Confirmation.css';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions';

class Confirmation extends Component {
    state = {
        order: this.props.order,
        confirmed: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        let order = this.state.order;
        this.setState({confirmed: true});
        console.log('[CONF_ST]:', this.state.confirmed);
        this.props.onRequest(order, this.props.token);
        // this.props.history.push('/');
    }

     render () {
        let confirmation = <p>No Confirmation Yet</p>;
        if (this.props.order) {
            confirmation = Object.keys( this.props.order.orderData ).map( itemKey => {
                return (
                    <li key={itemKey}>
                        <span style={{ textTransform: 'capitalize' }}>{itemKey.replace(/([A-Z])/g, ' $1').trim()}: {this.props.order.orderData[itemKey]}</span>
                    </li> );
            } );
        }
        return (
            <Aux className={classes.Confirmation}>
                <h3 className={classes.welcome}>Confirm Your Order</h3>
                <h3 className={classes.subtitle}>Delivery Details:</h3>
                <ul className={classes.noBullets}>
                    {confirmation}
                </ul>
                <p>Confirm ?</p>
                <Button btnType="Success" clicked={(event) => this.orderHandler(event)}>Confirm</Button>
                {/* <Button btnType="Danger" disabled={!this.state.confirmed} clicked={() => this.props.history.push('/')}>Done</Button> */}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.requestBuilder.order,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRequest: (orderData, token) => dispatch(actions.requestDelivery(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Confirmation, axios));