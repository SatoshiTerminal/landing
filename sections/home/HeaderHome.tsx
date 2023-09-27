import React from 'react';
import styles from './HeaderHome.module.css';
import Image from 'next/image';

export default function HeaderHome() {
  return (
    <header className={styles.headerHome}>
      <div className={styles.bgOverlay}>
        <Image
          className={styles.imgBg}
          src="/images/home/header/header__img-bg.jpg"
          alt="background"
          fill={true}
        />
      </div>
      <div className={styles.content}>
        <Image
          src="/images/home/header/logo.png"
          className={styles.logo}
          alt="logo"
          width={250}
          height={106}
        />
      </div>
    </header>
  );
}
