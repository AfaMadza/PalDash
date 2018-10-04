import React from 'react';

import palDshLogo from '../../assets/images/palDash-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={palDshLogo} alt="PalDash" />
    </div>
);

export default logo;