import React from 'react'
import styles from '@css/account/account.module.css'
import Dashstatus from '@comp/account/Dashstatus'


function Account() {
  return (
    <div className={styles.account}>
        <div className={styles.dashprice}>
        Account Dashboard
        </div>

        <div className={styles.dashoffers}>
        Dash-OFFERS 
        </div>

        <Dashstatus/>

    </div>

  )
}

export default Account