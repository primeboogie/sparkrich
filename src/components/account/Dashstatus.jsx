import React from 'react'
import useri from '/images/useri.png' 

import styles from '@css/account/dashstatus.module.css'
import accstyles from '@css/account/account.module.css'

import { GoUnverified } from "react-icons/go";

import WavyBtn from '@comp/ui/buttons/WavyBtn'
import Listed from './Listed';


function Dashstatus() {

    const records = [
        { name: 'Boogie Baby yeaj', sys: 'KSH', amount: '1000', status: 2, state: true },
        { name: 'Ben', sys: 'KSH', amount: '10', status: 0, state: true },
        { name: 'Bosco', sys: 'KSH', amount: '982', status: 1, state: false },
        { name: 'Boogie', sys: 'KSH', amount: '1000', status: 2, state: true },
        { name: 'Ben', sys: 'KSH', amount: '10', status: 0, state: true },
        { name: 'Bosco', sys: 'KSH', amount: '982', status: 1, state: false },
        { name: 'Boogie', sys: 'KSH', amount: '1000', status: 2, state: true },
        { name: 'Ben', sys: 'KSH', amount: '10', status: 0, state: true },
        { name: 'Bosco', sys: 'KSH', amount: '982', status: 1, state: false },
        { name: 'Mildred', sys: 'KSH', amount: '46', status: 2, state: true }
    ];

  return (
    <div className={`${accstyles.dashstatus} ${styles.dashstatus}`}>
        <span className={styles.ai} >Account Summary</span>
        <div className={styles.uibal} >
            <img src={useri} alt="" />
            <span>Your Balance</span>
            <span>KSH 14, 000</span>
        </div>

        <div className={styles.uitra}>
            <span>Recent Transactions</span>
        <div className={styles.uialltra}>

        {records.map((record, index) => (
                <Listed 
                    key={index} 
                    name={record.name} 
                    sys={record.sys} 
                    amount={record.amount}      
                    status={record.status} 
                    state={record.state} 
                />
            ))
        }

        </div>
        </div>


            <div className={styles.uiinfo}>
                <span>Earnings</span>
                <p>Follow these daily earning steps:</p>
                <ul>
                    <li> <GoUnverified/> Copy Link then Download and post our daily product</li>
                    <li> <GoUnverified/> Submit your Daily screenshot through the form</li>
                    <li> <GoUnverified/> Ensure you have a marketing package.</li>
                    <li> <GoUnverified/> Withdraw your earnings daily</li>
                    <li> <GoUnverified/> Unclaimed funds will be removed.</li>

                </ul>

                <WavyBtn> Copy Link </WavyBtn> 
            </div>
    </div>
  )
}

export default Dashstatus