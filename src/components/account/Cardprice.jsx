import React from 'react';
import styles from '@css/account/cardprice.module.css';
import '/src/assets/css/main.module.css'

function Cardprice({ groupname, percentage = 70, amount = 478, groupno = 2 }) {
    const colorset  = {
        1: {'A': '#4a0f52', 'B': '#8a1596'},
        2: {'A': '#f3391d', 'B': '#f3911f'},
        3: {'A': '#df3854', 'B': '#4b3452'},
        4: {'A': '#2a44bf', 'B': '#31a2db'},
    }

    const circleStyle = {
        background: `conic-gradient( ${colorset[groupno]['A']} ${percentage * 3.6}deg, ${colorset[groupno]['B']} ${percentage * 3.6}deg)`
    };

    const per = {
        background: `linear-gradient(190deg, ${colorset[groupno]['A']} , ${colorset[groupno]['B']})`
    }

    return (
        <div className={styles.balanceCard} style={per}>
            <div className={styles.header}>{groupname}</div>
            <div className={styles.circle} style={circleStyle}>
                <div className={styles.percentage} style={per} >{percentage}%</div>
            </div>
            <div className={styles.amount}>KES {amount}</div>
        </div>
    );
}

export default Cardprice;


// ff6b6b
// ff8c42