import React from 'react';
import Image from 'next/image';
import styles from './HomePage.module.css';

// Sections
import HeaderHome from '@/sections/home/HeaderHome';
import OverviewHome from '@/sections/home/OverviewHome';
import OurVision from '@/sections/home/OurVisionHome';
import CompanyMission from '@/sections/home/CompanyMission';

export default function Home() {
  return (
    <React.Fragment>
      {/* Header */}
      <HeaderHome />
      <main className={styles.main}>
        {/* Section 1 Overview */}
        <OverviewHome />
        {/* Section 2 Our Vision&Goal */}
        <OurVision />
        {/* Section 3 Company Mission */}
        <CompanyMission />      
      </main>
    </React.Fragment>
  );
}
