import React from 'react'
import compstyles from '@css/compiler.module.css'
import styles from '@css/minnav.module.css'


function Minnav() {
  return (
    <div className={`${compstyles.minnav} ${styles.minnav}`}>
      Min-Navigation
    </div>

  )
}

export default Minnav