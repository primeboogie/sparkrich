import React from 'react'
import useri from 'images/useri.png' 

import styles from '@css/account/dashstatus.module.css'
import accstyles from '@css/compiler/compiler.module.css'

import { GoUnverified } from "react-icons/go";

import WavyBtn from '@comp/ui/buttons/WavyBtn'


function Dashstatus() {
  return (
    <div className={`${accstyles.dashstatus} ${styles.dashstatus}`}>
        <span>Account Information</span>
        <div>
            <img src={useri} alt="" />
            <span>Your-Balance</span>
            <span>KSH 14, 000</span>
        </div>
        <div>
            <span>Recent Transactions</span>
            <div>
                <div>
                    <span></span>
                    <span>Boogie</span>
                    <span>KSH 1000</span>
                    <span>Success</span>
                </div>
            </div>
            <div>
            <span>Earnings</span>
            <p>Follow these daily earning steps:</p>
            <ul>
                <li> <GoUnverified/> Copy and post the link below</li>
                <li> <GoUnverified/> Download and post our daily product</li>
                <li> <GoUnverified/> Provide a screenshot of views</li>
                <li> <GoUnverified/> Submit the screenshot through the form</li>
                <li> <GoUnverified/> Ensure you have a marketing package.</li>
                <li> <GoUnverified/> Withdraw your earnings daily</li>
                <li> <GoUnverified/> Unclaimed funds will be removed.</li>

            </ul>
            <WavyBtn> Copy Link </WavyBtn> 
            </div>
        </div>

    </div>
  )
}

export default Dashstatus