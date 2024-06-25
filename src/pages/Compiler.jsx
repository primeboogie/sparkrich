import { Routes, Route } from "react-router-dom"

import styles from '@css/compiler/compiler.module.css'
import Header from '@comp/compiler/Header'
import Navbar from '@comp/compiler/Navbar'
import Minnav from '@comp/compiler/Minnav'

import Account from '@pages/Account'
import Deposit from '@pages/Deposit'
import Withdrawal from '@pages/Withdrawal'
import { useState } from "react"

import Dashstatus from '@comp/account/Dashstatus';
import Dashprice from '@comp/account/Dashprice';
import Dashoffers from '@comp/account/Dashoffers';


function Compiler() {

  const [navshow, setNavShow] = useState(false)

  return (
    <div className={styles.compiler}>
      <Header/>
      <Navbar/>
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="account" element={<Account />} />
          <Route path="price" element={<Dashprice />} />
          <Route path="offers" element={<Dashoffers />} />
          <Route path="status" element={<Dashstatus />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdrawal" element={<Withdrawal />} />
        </Routes>
      </div>
      <Minnav/>
      </div>
  )
}

export default Compiler