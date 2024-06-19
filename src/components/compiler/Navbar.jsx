import React from 'react'
import { Link } from "react-router-dom"
import { RiDashboardFill } from "react-icons/ri";
import { PiHandDepositDuotone } from "react-icons/pi";
import { PiHandWithdrawDuotone } from "react-icons/pi";

import compstyles from '@css/compiler.module.css'
import styles from '@css/navbar.module.css'
import sparkpng from '/spark.png'

function Navbar() {
  return (
    <div className={`${compstyles.navbar} ${styles.navbar}`}>
      <div className={styles.sparkpng}>
        <img src={sparkpng} alt="sparkpng" />
      </div>

    <div className={styles.nav}>
  
    <ul>
        <li><Link to="/account"> <RiDashboardFill /> Home</Link></li>
        <li><Link to="/deposit"><PiHandDepositDuotone /> Deposit</Link></li>
        <li><Link to="/withdrawal"><PiHandWithdrawDuotone /> Withdrawal</Link></li>
        <li><Link to="/account"> <RiDashboardFill /> Home</Link></li>
        <li><Link to="/deposit"><PiHandDepositDuotone /> Deposit</Link></li>
        <li><Link to="/withdrawal"><PiHandWithdrawDuotone /> Withdrawal</Link></li>
        <li><Link to="/account"> <RiDashboardFill /> Home</Link></li>
        <li><Link to="/deposit"><PiHandDepositDuotone /> Deposit</Link></li>
        <li><Link to="/withdrawal"><PiHandWithdrawDuotone /> Withdrawal</Link></li>
        <li><Link to="/account"> <RiDashboardFill /> Home</Link></li>
        <li><Link to="/deposit"><PiHandDepositDuotone /> Deposit</Link></li>
        <li><Link to="/withdrawal"><PiHandWithdrawDuotone /> Withdrawal</Link></li>
        <li><Link to="/account"> <RiDashboardFill /> Home</Link></li>
        <li><Link to="/deposit"><PiHandDepositDuotone /> Deposit</Link></li>
        <li><Link to="/withdrawal"><PiHandWithdrawDuotone /> Withdrawal</Link></li>
    </ul>
  </div>

    <div className={styles.logout}>
    <button className={styles.button}>
    <span className={styles.buttonContent}>Logout </span>
  </button>

    </div>
    </div>

  )
}

export default Navbar