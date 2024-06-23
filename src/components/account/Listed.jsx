import React from 'react'
import styles from '@css/account/dashstatus.module.css'


function Listed({ name='None', sys= '$', amount='0.00', state=false, status=0}) {

    let statusClass;
    let statusName;

    if (status == 0) {
        statusClass = 'syspending';
        statusName = 'Pending';
    } else if (status == 1) {
        statusClass = 'sysrejected';
        statusName = 'Rejected';
    } else if (status == 2) {
        statusClass = 'syssuccess';
        statusName = 'Success';
    }

  return (

    <div className={styles.uiintra}>
    <span></span>
    <span>{name}</span>
    <span>{sys}   {state ? '+' : '-'}{amount}</span>
    <span className={styles[statusClass]}>{statusName}</span>
</div>
  )
}

export default Listed