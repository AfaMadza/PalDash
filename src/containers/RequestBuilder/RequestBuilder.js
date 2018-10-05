import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Request from '../../components/Request/Request';
//import RequestControls from '../../components/Request/RequestControls/RequestControls';
import Modal from '../../components/UI/Modal/Modal';
import RequestSummary from '../../components/Request/RequestSummary/RequestSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class RequestBuilder extends Component {
    state = {
        requesting: false,
        purchasing: false,
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
        this.setState({purchasing: true});
        this.props.onRequestInit();
        this.props.history.push('/checkout');
    }
    updateRequestState ( order ) {
        if (order) {
            return true;
        }
    }

    render () {
        let requestSummary = null;
           let request = (
                <Aux>
                    <Request
                        purchasable={this.updateRequestState(this.props.order)}
                        requested={this.requestHandler}
                        purchasing={this.state.purchasing}
                        isAuth={this.props.isAuthenticated}
                        />
                    {/* <RequestControls /> */}
                </Aux>
            );
            requestSummary = <RequestSummary
                order={this.props.order}
                requestCancelled={this.requestCancelHandler}
                requestContinued={this.requestContinueHandler} />;

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
        order: state.requestBuilder.order,
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