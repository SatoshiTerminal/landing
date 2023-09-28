import React from 'react';
import styles from './OverviewHome.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';

export default function OverviewHome() {
  return (
    <section className={`${styles.overview} home-sect-p`}>
      <Image
        src="/images/home/overview/bitcoin-left.png"
        alt="bitcoin"
        height={240}
        width={240}
        className={styles.bitcoinLeft}
        quality={100}
      />
      <Image
        src="/images/home/overview/shield-right.png"
        alt="bitcoin"
        height={240}
        width={240}
        className={styles.shieldRight}
        quality={100}
      />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <SectionHeader
              subtitle="Overview"
              titleBeforeAccent="The Satoshi Terminal is the first"
              titleAccent="crypto"
              titleAfterAccent="research platform"
              description="Billions are poured into cryptocurrency and blockchain companies by Wall Street. Yet, a less-than-positive perception of the industryremains a significant challenge. We want to change that."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
