import React from 'react'
import { Link } from "react-router-dom"
import { RiDashboardFill } from "react-icons/ri";
import { PiHandDepositDuotone } from "react-icons/pi";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { RiWhatsappLine } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { PiQrCode } from "react-icons/pi";
import { PiHandArrowDown } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSortAmountUp } from "react-icons/fa";

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
        <li><Link to="/deposit"> <FaSortAmountUp /> Investments</Link></li>
        <li><Link to="/withdrawal"><RiWhatsappLine /> Whatsapp</Link></li>
        <li><Link to="/account"> <PiHandDepositDuotone /> Deposit</Link></li>
        <li><Link to="/withdrawal"><PiHandWithdrawDuotone /> Withdrawal</Link></li>
        <li><Link to="/account"> <FaCartShopping /> Shop</Link></li>
        <li><Link to="/withdrawal"><BsShop /> Sales</Link></li>
        <li><Link to="/account"> <PiQrCode /> Agent Codes</Link></li>
        <li><Link to="/deposit"><PiHandArrowDown /> Loans</Link></li>
        <li><Link to="/deposit"><FaUsersCog /> Team</Link></li>
        <li><Link to="/withdrawal"><FaUserEdit /> Profile</Link></li>
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