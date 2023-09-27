import React from 'react';
import Image from 'next/image';
import styles from './HomePage.module.css';

// Sections
import HeaderHome from '@/sections/home/HeaderHome';

export default function Home() {
  return (
    <React.Fragment>
      {/* Header */}
      <HeaderHome />
      <main className={styles.main}>
        {/* Section */}
      </main>
    </React.Fragment>
  );
}
