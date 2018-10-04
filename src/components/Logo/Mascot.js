import React from 'react';

import palDasher from '../../assets/images/palDasher-logo.png';
import classes from './Mascot.css';

const mascot = (props) => (
    <div className={classes.Mascot} style={{height: props.height}}>
        <img src={palDasher} alt="PalDasher" />
    </div>
);

export default mascot;