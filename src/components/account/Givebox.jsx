import React from 'react'

import styles from '@css/account/givebox.module.css'
import accstyles from '@css/account/dashoffers.module.css'

function Givebox() {
  return (
    <div className={styles.givebox}>
        <span>Buy</span>
        <span>Elite Package</span>
        <span>@1000 KES</span>
        <span>&</span>
        <span>Get Awarded</span>
        <span>3000 KES</span>
    </div>
  )
}

export default Givebox