import React from 'react';
import styles from './OurRoadmap.module.css';

// Components
import SectionHeader from '@/components/SectionHeader';

// Data
import { ourRoadmapData } from '@/data/ourRoadmapData';

export default function OurRoadmap() {
  return (
    <section id="roadmap" className={`${styles.ourRoadmap} home-sect-p`}>
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
          {ourRoadmapData.map((item, index) => (
            <div key={index} className={`${styles.roadmapItem}`}>
              <div className={styles.itemContent}>
                <span className={styles.dateItemContent}>{item.date}</span>
                {item.list.map((item, index) => (
                  <ul key={index} className={styles.itemList}>
                    <li className={styles.itemListSingle}>
                      <span>{item.title}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* end content */}
      </div>
    </section>
  );
}
