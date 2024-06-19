import React from 'react'
import compstyles from '@css/compiler.module.css'
import styles from '@css/header.module.css'

import sparkbg from '/layout/sparkbg.jpg'
import { GoBell } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <div className={`${compstyles.header} ${styles.header}`}>
      <span className={styles.welcomeagent}>
        Welcome Back <i>Boogie</i>!
      </span>
      <span className={styles.welcomecompany}>
        {/* <img src={sparkbg} alt="" /> */}
        SPARK-RICH
      </span>

      <div className={styles.searchdiv}>
      <IoSearch stroke-width='9px'/>
        <input type="text" placeholder="Search Downlines..." />
      </div>

      <div className={styles.info}>
      <GoBell />
        <div className={styles.ininfo}>
          <span>Boogie</span>
          <span><MdVerifiedUser /> Agent</span>
          <span></span>
        </div>
      </div>
    </div>
    

  )
}

export default Header