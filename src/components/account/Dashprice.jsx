import React from 'react'

import styles from '@css/account/dashprice.module.css'
import accstyles from '@css/account/account.module.css'
import Cardprice from '@comp/account/Cardprice'


function Dashprice() {
  return (
    <div className={`${accstyles.dashprice} ${styles.dashprice}`}>
    <div className={styles.dashhead}>
        <span>{" > Account Dashboard "}</span>
        <span>
            Show: <i>Today, 23 December 2024</i>
        </span>
    </div>

    <Cardprice groupname={'Whatsapp Balance'} percentage = {60} amount={'33,822'} groupno={'2'} />
    <Cardprice groupname={'My Package'} percentage = {10} amount={'Silver'} groupno={'1'} />
    <Cardprice groupname={'Total Whatsapp Withdrawn'} percentage = {60} amount={'67,898'} groupno={'3'} />
    <Cardprice groupname={'Invested Money'} percentage = {60} amount={'11,597'} groupno={'4'} />

    <Cardprice groupname={'Spinning Balance'} percentage = {60} amount={'1,321'} groupno={'4'} />
    <Cardprice groupname={'Cashback Balance'} percentage = {60} amount={'2,526'} groupno={'3'} />
    <Cardprice groupname={'Agent Withdrawal'} percentage = {70} amount={'32,177'} groupno={'2'} />
    <Cardprice groupname={'Agent Money'} percentage = {60} amount={'14,198'} groupno={'1'} />

    </div>
  )
}

export default Dashprice