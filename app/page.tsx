import React from 'react';
import Image from 'next/image';
import styles from './HomePage.module.css';

// Sections
import HeaderHome from '@/sections/home/HeaderHome';
import OverviewHome from '@/sections/home/OverviewHome';
import OurVision from '@/sections/home/OurVisionHome';
import CompanyMission from '@/sections/home/CompanyMission';
import OurProduct from '@/sections/home/OurProduct';
import OurPrice from '@/sections/home/OurPrice';
import OurRoadmap from '@/sections/home/OurRoadmap';
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
        {/* Section 4 Our Product */}
        <OurProduct />
        {/* Section 5 Our Pricing */}
        <OurPrice />
        {/* Section 6 Our Roadmap */}
        <OurRoadmap />
      </main>
    </React.Fragment>
  );
}
