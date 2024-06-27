import { Link } from 'react-router-dom';
import compstyles from '@css/compiler/compiler.module.css';
import styles from '@css/compiler/minnav.module.css';

import { MdOutlineManageAccounts } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { HiHome } from "react-icons/hi2";
import { GoGift } from "react-icons/go";


import Menubtn from '../ui/buttons/Menubtn';

function Minnav( {navShow, setNavShow} ) {
  return (
    <div className={`${compstyles.minnav} ${styles.minnav}`}>

      <Link to="/account/"> <HiHome/> </Link>
      <Link to="/deposit"> <GoGift/></Link>
       <Menubtn navShow={navShow} setNavShow={setNavShow}/>
       <span></span>
      <Link to="/status"> <VscGraph/></Link>
      <Link to="/status"><MdOutlineManageAccounts/></Link>
   
    </div>
  );
}

export default Minnav;
