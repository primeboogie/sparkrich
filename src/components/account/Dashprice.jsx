import React, { useEffect, useRef } from 'react';
import styles from '@css/account/dashprice.module.css';
import accstyles from '@css/account/account.module.css';
import Cardprice from '@comp/account/Cardprice';

function Dashprice() {
  const marketRef = useRef(null);

  useEffect(() => {
    const market = marketRef.current;
    const items = Array.from(market.children);
    const totalItems = items.length;

    // Duplicate items for infinite scrolling
    items.forEach(item => {
      market.appendChild(item.cloneNode(true));
    });

    const handleScroll = () => {
      if (market.scrollLeft >= market.scrollWidth / 2) {
        market.scrollLeft = 0;
      }
    };

    market.addEventListener('scroll', handleScroll);

    // Initial scroll to create the animation effect
    market.scrollLeft = 1;

    return () => {
      market.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${accstyles.dashprice} ${styles.dashprice}`}>
      <div className={styles.dashhead}>
        <span>{' > Dashboard '}</span>
        <span>
          Show: <i>Today, 23 December 2024</i>
        </span>
      </div>

      <div className={styles.market} ref={marketRef}>
        <div className={styles.slider}>
          <span>
            <h3>Buy</h3>
            Buy Token and earn
          </span>
          <span>
            <h3>Invest</h3>
            Invest Token and earn
          </span>
          <span>
            <h3>Send</h3>
            Send Token and earn
          </span>
          <span>
            <h3>Share</h3>
            Share your link and earn
          </span>
        </div>
      </div>

      <Cardprice groupname={'Whatsapp Balance'} percentage={79} amount={'33,822'} groupno={'2'} />
      <Cardprice groupname={'My Package'} percentage={0} amount={'Silver'} groupno={'1'} />
      <Cardprice groupname={'Total Whatsapp Withdrawn'} percentage={60} amount={'67,898'} groupno={'3'} />
      <Cardprice groupname={'Invested Money'} percentage={60} amount={'11,597'} groupno={'4'} />
      <Cardprice groupname={'Spinning Balance'} percentage={60} amount={'1,321'} groupno={'4'} />
      <Cardprice groupname={'Cashback Balance'} percentage={60} amount={'2,526'} groupno={'3'} />
      <Cardprice groupname={'Agent Withdrawal'} percentage={70} amount={'32,177'} groupno={'2'} />
      <Cardprice groupname={'Agent Money'} percentage={60} amount={'14,198'} groupno={'1'} />
    </div>
  );
}

export default Dashprice;
