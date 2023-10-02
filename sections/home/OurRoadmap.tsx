import React from 'react';
import styles from './OurRoadmap.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';

export default function OurRoadmap() {
  return (
    <section className={`${styles.ourRoadmap} home-sect-p`}>
      <div className="container">
        <SectionHeader
          subtitle="Roadmap"
          titleBeforeAccent="Our"
          titleAccent="Roadmap"
          description="Our industry low price can save institutional investors thousands each month by switching to us instead of the Bloomberg Terminal."
        />
      </div>
      <div className={styles.roadmap}>
        <div className={styles.roadmapLine}></div>

        <div className={styles.roadmapContent}>
          {/* Item 1 */}
          <div  className={`${styles.roadmapItem} ${styles.left10}`}>
            <div className={styles.itemContent}>
              
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  Crypto Wallet version release
                </li>
                <li className={styles.itemListSingle}>
                  Platform ealier version development
                </li>
                <li className={styles.itemListSingle}>Testnet launch start</li>
              </ul>
              
            </div>
          </div>
          {/* Item 2  */}
          <div  className={`${styles.roadmapItem} ${styles.left20}`}>
            <div className={styles.itemContent}>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  Crypto Wallet version release
                </li>
                <li className={styles.itemListSingle}>
                  Platform ealier version development
                </li>
                <li className={styles.itemListSingle}>Testnet launch start</li>
              </ul>
            </div>
          </div>
          {/* Item 3 */}
          <div  className={`${styles.roadmapItem} ${styles.left30}`}>
            <div className={styles.itemContent}>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  Crypto Wallet version release
                </li>
                <li className={styles.itemListSingle}>
                  Platform ealier version development
                </li>
                <li className={styles.itemListSingle}>Testnet launch start</li>
              </ul>
            </div>
          </div>
          {/* Item 4 */}
          <div  className={`${styles.roadmapItem} ${styles.left40}`}>
            <div className={styles.itemContent}>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  Crypto Wallet version release
                </li>
                <li className={styles.itemListSingle}>
                  Platform ealier version development
                </li>
                <li className={styles.itemListSingle}>Testnet launch start</li>
              </ul>
            </div>
          </div>
          {/* Item 5 */}
          <div  className={`${styles.roadmapItem} ${styles.left50}`}>
            <div className={styles.itemContent}>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  Crypto Wallet version release
                </li>
                <li className={styles.itemListSingle}>
                  Platform ealier version development
                </li>
                <li className={styles.itemListSingle}>Testnet launch start</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
