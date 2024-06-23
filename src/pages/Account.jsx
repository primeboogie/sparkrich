import React from 'react'
import styles from '@css/account/account.module.css'
import Dashstatus from '@comp/account/Dashstatus'
import Dashprice from '@comp/account/Dashprice'
import Dashoffers from '@comp/account/Dashoffers'


function Account() {
  return (
    <div className={styles.account}>

        <Dashprice />
        <Dashoffers />
        <Dashstatus />

    </div>

  )
}

export default Account