import React from 'react'
import compstyles from '@css/compiler.module.css'
import styles from '@css/minnav.module.css'


function Minnav() {
  return (
    <div className={`${compstyles.minnav} ${styles.minnav}`}>Minnav</div>

  )
}

export default Minnav