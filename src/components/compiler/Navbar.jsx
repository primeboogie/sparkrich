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
import { PiAlignBottom } from "react-icons/pi";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { BsArrowDownUp } from "react-icons/bs";
import { RiBookmark3Line } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa6";

import compstyles from '@css/compiler/compiler.module.css'
import styles from '@css/compiler/navbar.module.css'
import sparkpng from '/spark.png'

function Navbar( {mobile, auth} ) {
  return (
    <div className={`${compstyles.navbar} ${styles.navbar}`} style={mobile}>
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
          <li><Link to="/withdrawal"><PiAlignBottom /> Forex-Bots</Link></li>
          <li><Link to="/withdrawal"><FaArrowUpRightDots /> Forex-Trade</Link></li>
          <li><Link to="/withdrawal"><BsArrowDownUp /> Crypto</Link></li>
          <li><Link to="/withdrawal"><RiBookmark3Line /> Remotask</Link></li>
          <li><Link to="/withdrawal"><FaBitcoin /> Bitcoin-Trading</Link></li>
          <li><Link to="/account"> <PiQrCode /> Agent Codes</Link></li>
          <li><Link to="/deposit"><PiHandArrowDown /> Loans</Link></li>
          <li><Link to="/deposit"><FaUsersCog /> Team</Link></li>
          <li><Link to="/withdrawal"><FaUserEdit /> Profile</Link></li>
      </ul>
  </div>

    <div className={styles.logout}>
      <button className={styles.button}>
      <span className={styles.buttonContent} onClick={auth} >Logout </span>
      </button>
    </div>

    </div>

  )
}

export default Navbar