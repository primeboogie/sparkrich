import React from 'react'

import styles from '@css/account/dashoffers.module.css'
import accstyles from '@css/account/account.module.css'

import Givebox from '@comp/account/Givebox'

function Dashoffers() {
  return (
    <div className={`${accstyles.dashoffers} ${styles.dashoffers} ` }>
        <span className={styles.head}>Sunday Give-Away Cashback</span>

            <Givebox/>
            <Givebox/>
            <Givebox/>
            <Givebox/>

        <span className={styles.foot}>Directly To Your Mpesa</span>
    </div>
  )
}

export default Dashoffers