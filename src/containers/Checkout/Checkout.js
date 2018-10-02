import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Request from '../../components/Request/Request';
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
        if ( this.props.orders ) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        order={Request}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route
                        path={this.props.match.path + '/request'}
                        component={Request} />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        requested: state.order.requested
    }
};

export default connect( mapStateToProps )( Checkout );