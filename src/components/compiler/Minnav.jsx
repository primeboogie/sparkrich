import compstyles from '@css/compiler/compiler.module.css'
import styles from '@css/compiler/minnav.module.css'


function Minnav() {
  return (
    <div className={`${compstyles.minnav} ${styles.minnav}`}>
      Min-Navigation
    </div>

  )
}

export default Minnav