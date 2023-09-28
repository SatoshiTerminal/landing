import React from 'react';
import styles from './OverviewHome.module.css';
import Image from 'next/image';

// Data
import { overviewHomeList } from '@/data/overviewHome';

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
        className={styles.imgAbsolute1}
        quality={100}
      />
      <Image
        src="/images/home/overview/shield-right.png"
        alt="bitcoin"
        height={240}
        width={240}
        className={styles.imgAbsolute2}
        quality={100}
      />
      <div className="container">
        <div className={styles.top}>
          {/* Left side */}
          <div className={styles.topLeft}>
            <SectionHeader
              subtitle="Overview"
              titleBeforeAccent="The Satoshi Terminal is the first"
              titleAccent="crypto"
              titleAfterAccent="research platform"
              description="Billions are poured into cryptocurrency and blockchain companies by Wall Street. Yet, a less-than-positive perception of the industryremains a significant challenge. We want to change that."
            />

            <ul className={styles.list1}>
              {overviewHomeList.map((item, index) => {
                return (
                  <li key={index} className={styles.listItem1}>
                    <Image
                      src={item.url}
                      alt={item.title}
                      height={42}
                      width={42}
                      quality={100}
                      className={styles.listItem1Icon}
                    />
                    <div className={styles.item1Title}>{item.title}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* topLeft end */}
          {/* Right side */}
          <div className={styles.topRight}>
            <div className={styles.imagesGroup}>
              <Image
                src="/images/home/overview/rectangle-cut-small.svg"
                alt="overview"
                width={417}
                height={331}
                className={styles.imgReactangle1}
              />
              <Image
                src="/images/home/overview/rectangle-cut-large.svg"
                alt="overview"
                fill={true}
                className={styles.imgReactangle2}
              />
              <Image
                src="/images/home/overview/satoshi-keyboard.png"
                alt="overview"
                width={466}
                height={231}
                className={styles.imgMain}
              />
            </div>
          </div>
          {/* topRight end */}
        </div>
        {/* top end */}
      </div>
    </section>
  );
}
