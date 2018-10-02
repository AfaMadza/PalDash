import React from 'react';

import classes from './Order.css';

const order = ( props ) => {
    const orderData = [];
    for ( let dataItem in props.orderData ) {
        orderData.push(
            {
                name: dataItem,
                value: props.orderData[dataItem]
            }
        );
    }
    console.log('orderData', props);

    const orderOutput = orderData.map(or => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'block',
                margin: '0 8px',
                border: 'none',
                padding: '5px'
                }}
            
            key={or.name}>{or.name.replace(/([A-Z])/g, ' $1').trim()}: {or.value}</span>;
    });

    return (
        <div className={classes.Order}>
            <p>{orderOutput}</p>
        </div>
    );
};

export default order;