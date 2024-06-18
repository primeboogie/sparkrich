import React from 'react'
import compstyles from '@css/compiler.module.css'
import styles from '@css/header.module.css'


function Header() {
  return (
    <div className={`${compstyles.header} ${styles.header}`}>Headers</div>

  )
}

export default Header