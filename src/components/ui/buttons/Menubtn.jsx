import React, { useState } from 'react';
import styles from '@css/buttons/menubtn.module.css'; // Ensure you have the correct path to your CSS file

function Menubtn() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      console.log("open");
    } else {
      console.log("returned");
    }
  };

  return (
    <div className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </div>
  );
}

export default Menubtn;
