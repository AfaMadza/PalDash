import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Order from '../../components/Order/Order';
//import * as actions from '../../store/actions/index';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/request' );
    }

    render () {
        let summary = <Redirect to="/" />
        if ( this.props.order ) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        name={this.props.order.orderData.name}
                        mealId={this.props.oreder.orderData.mealId}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    {/* <Route
                        path={this.props.match.path + '/request'}
                        component={Request} /> */}
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