import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Checkout.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Confirmation from './Confirmation/Confirmation';
//import * as actions from '../../store/actions/index';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/confirmation' );
    }

    render () {
        let summary = <Redirect to="/" />
        if ( this.props.order ) {
            const requestedRedirect = this.props.requested ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    {requestedRedirect}
                    <CheckoutSummary
                        order={this.props.order}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <div className={classes.Conf}>
                        <Route
                            path={this.props.match.path + '/confirmation'}
                            component={Confirmation} />
                    </div>
                    
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        order: state.requestBuilder.order,
        requested: state.order.requested
    }
};

export default connect( mapStateToProps )( Checkout );