import { Link } from 'react-router-dom';
import compstyles from '@css/compiler/compiler.module.css';
import styles from '@css/compiler/minnav.module.css';

import { MdOutlineManageAccounts } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import Menubtn from '../ui/buttons/Menubtn';

function Minnav() {
  return (
    <div className={`${compstyles.minnav} ${styles.minnav}`}>

      <Link to="/account/">Dashboard</Link>
      <Link to="/deposit">offers</Link>
       <Menubtn/>
      <Link to="/status"> <VscGraph/></Link>
      <Link to="/status"><MdOutlineManageAccounts/></Link>
   
    </div>
  );
}

export default Minnav;
