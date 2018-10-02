import React from 'react';

import classes from './RequestControls.css';

const requestControls = (props) => (
    <div className={classes.RequestControls}>
        <button 
            className={classes.RequestButton}
            disabled={!props.purchasable}
            onClick={props.requested}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default requestControls;