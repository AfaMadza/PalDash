import React from 'react';
import Mascot from '../../Logo/Mascot';
//import Order from '../../Order/Order';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1 className={classes.welcome}>We hope you enjoy your meal!</h1>
            <div className={classes.Mascot}>
                <Mascot />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;