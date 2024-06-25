import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from '@css/account/account.module.css';

import Dashstatus from '@comp/account/Dashstatus';
import Dashprice from '@comp/account/Dashprice';
import Dashoffers from '@comp/account/Dashoffers';

function Account() {
  return (
    <div className={styles.account}>
      {/* Large device view */}
      <div className={styles.largedevise}>
        <Dashprice />
        <Dashoffers />
        <Dashstatus />
      </div>


      <div className={styles.smalldevise}>
      <Dashprice />
      </div>
    </div>
  );
}

export default Account;
