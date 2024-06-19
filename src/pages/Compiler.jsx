import { Routes, Route } from "react-router-dom"

import styles from '@css/compiler.module.css'
import Header from '@comp/compiler/Header'
import Navbar from '@comp/compiler/Navbar'
import Minnav from '@comp/compiler/Minnav'

import Account from '@pages/Account'
import Deposit from '@pages/Deposit'
import Withdrawal from '@pages/Withdrawal'

function Compiler() {


  return (
    <div className={styles.compiler}>
      <Header/>
      <Navbar/>
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/account" element={<Account />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
      </Routes>
      </div>
      <Minnav/>

    </div>
  )
}

export default Compiler