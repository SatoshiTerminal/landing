import React from 'react';
import Image from 'next/image';
import styles from './HomePage.module.css';

// Sections
import HeaderHome from '@/sections/home/HeaderHome';
import OverviewHome from '@/sections/home/OverviewHome';
import OurVision from '@/sections/home/OurVisionHome';

export default function Home() {
  return (
    <React.Fragment>
      {/* Header */}
      <HeaderHome />
      <main className={styles.main}>
        {/* Section Overview */}
        <OverviewHome />
        {/* Section Our Vision&Goal */}
        <OurVision />
      </main>
    </React.Fragment>
  );
}
