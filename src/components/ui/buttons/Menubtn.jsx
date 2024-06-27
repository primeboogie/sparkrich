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
    <div>
      <input
        type="checkbox"
        id="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.toggle}>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
      </label>
    </div>
  );
}

export default Menubtn;
