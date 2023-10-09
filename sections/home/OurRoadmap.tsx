import React from 'react';
import styles from './OurRoadmap.module.css';

// Components
import SectionHeader from '@/components/SectionHeader';

// Data
import { ourRoadmapData } from '@/data/ourRoadmapData';

export default function OurRoadmap() {
  return (
    <section id="section-6" className={`${styles.ourRoadmap} home-sect-p`}>
      <div className="container">
        <SectionHeader
          cssClassName={styles.ourRoadmapHeader}
          subtitle="Roadmap"
          titleBeforeAccent="Our"
          titleAccent="Roadmap"
          description="Our industry low price can save institutional investors thousands each month by switching to us instead of the Bloomberg Terminal."
        />
      </div>
      <div className={styles.roadmapMain}>
        <div className={styles.roadmapLine}></div>

        <div className={styles.roadmapContent}>
          {/* Item 1 */}
          <div className={`${styles.roadmapItem} ${styles.left10}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q4 2022</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Strategy & Technical</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Team Formation</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Concept development</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 2 */}
          <div className={`${styles.roadmapItem} ${styles.left20}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2023</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Terminal prototype designed</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Technical specifications defined</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Early partnerships</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 3 */}
          <div className={`${styles.roadmapItem} ${styles.left30}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2024</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Crypto Wallet version release</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Platform ealier version development</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Testnet launch start</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 4 */}
          <div className={`${styles.roadmapItem} ${styles.left40}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2024</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Crypto Wallet version release</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Platform ealier version development</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Platform ealier version development</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 5 */}
          <div className={`${styles.roadmapItem} ${styles.left50}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2024</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Crypto Wallet version release</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Platform ealier version development</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Testnet launch start</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 6 */}
          <div className={`${styles.roadmapItem} ${styles.left60}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2024</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Crypto Wallet version release</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Platform ealier version development</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Testnet launch start</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 7 */}
          <div className={`${styles.roadmapItem} ${styles.left70}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2024</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Crypto Wallet version release</span>
                </li>

                <li className={styles.itemListSingle}>
                  <span>Testnet launch start</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Testnet launch start</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 8 */}
          <div className={`${styles.roadmapItem} ${styles.left80}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2024</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Crypto Wallet version release</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Platform ealier version development</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Testnet launch start</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Item 9 */}
          <div className={`${styles.roadmapItem} ${styles.left90}`}>
            <div className={styles.itemContent}>
              <span className={styles.dateItemContent}>Q1 2024</span>
              <ul className={styles.itemList}>
                <li className={styles.itemListSingle}>
                  <span>Crypto Wallet version release</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Platform ealier version development</span>
                </li>
                <li className={styles.itemListSingle}>
                  <span>Testnet launch start</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
