import React from 'react';

import Order from '../../Order/Order';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you enjoy your meal!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Order dropOff={props.dropOff} pickUp={props.pickuP} mealId={props.mealId}/>
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