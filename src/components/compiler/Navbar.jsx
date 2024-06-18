import React from 'react'
import { Link } from "react-router-dom"


import compstyles from '@css/compiler.module.css'
import styles from '@css/navbar.module.css'


function Navbar() {
  return (
    <div className={`${compstyles.navbar} ${styles.navbar}`}>
    <ul>
        <li><Link to="/account">Home</Link></li>
        <li><Link to="/deposit">Deposit</Link></li>
        <li><Link to="/withdrawal">Withdrawal</Link></li>
    </ul>
    </div>

  )
}

export default Navbar