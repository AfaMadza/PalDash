import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import Request from '../../components/Request/Request';
import Order from '../../components/Order/Order';
import RequestControls from '../../components/Request/RequestControls/RequestControls';
import Modal from '../../components/UI/Modal/Modal';
import RequestSummary from '../../components/Request/RequestSummary/RequestSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class RequestBuilder extends Component {
    state = {
        requesting: false
    }

    requestHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState( { requesting: true } );
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    requestCancelHandler = () => {
        this.setState( { requesting: false } );
    }

    requestContinueHandler = () => {
        this.props.onRequestInit();
        this.props.history.push('/checkout');
    }
    updateRequestState ( dropOff ) {
        if (dropOff) {
            return true;
        }
    }

    render () {
        let requestSummary = null;
        // let request = this.props.error ? <p>Request can't be loaded!</p> : <Spinner />;

        // if ( this.props.dropOff ) {}
           let request = (
                <Aux>
                    <Request
                        purchasable={this.updateRequestState(this.props.dropOff)}
                        requested={this.requestHandler}
                        isAuth={this.props.isAuthenticated}
                        />
                    {/* <RequestControls /> */}
                </Aux>
            );
            console.log('Order Data in RequestBuilder', this.props.orderData);
            requestSummary = <RequestSummary
                orderData={this.props.orderData}
                requestCancelled={this.requestCancelHandler}
                requestContinued={this.requestContinueHandler} />;
            console.log('requestSummary', requestSummary);
                
        return (
            <Aux>
                <Modal show={this.state.requesting} modalClosed={this.requestCancelHandler}>
                    {requestSummary}
                </Modal>
                {request}
            </Aux>
        );
    }
}


const mapStateToProps = state => {
    return {
        // dropOff: state.order.orders.address,
        // pickUp: state.order.orders.street,
        // mealId: state.order.orders.mealId,
        orderData: state.requestBuilder.orderData,
        error: state.order.orders.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestInit: () => dispatch(actions.requestInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( RequestBuilder, axios ));