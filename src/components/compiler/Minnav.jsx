import { Link } from 'react-router-dom';
import compstyles from '@css/compiler/compiler.module.css';
import styles from '@css/compiler/minnav.module.css';

function Minnav() {
  return (
    <div className={`${compstyles.minnav} ${styles.minnav}`}>
      <Link to="/account/">Dashboard</Link>
      <Link to="/deposit">Price</Link>
      <Link to="/offers">Offers</Link>
      <Link to="/status">Status</Link>
    </div>
  );
}

export default Minnav;
