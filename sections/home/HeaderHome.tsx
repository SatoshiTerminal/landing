import React from 'react';
import styles from './HeaderHome.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Components
import WatingListForm from '@/components/WatingListForm';

export default function HeaderHome() {
  return (
    <header className={styles.headerHome}>
      <Image
        className={styles.headerBg}
        src="/images/home/header/header__img-bg.jpg"
        alt="background"
        fill
        priority={true}
      />
      <div className={styles.content}>
        <Image
          src="/images/logo-text.svg"
          className={styles.logo}
          alt="logo"
          width={250}
          height={106}
          quality={100}
        />
        {/* Description */}
        <div className={styles.description}>
          <Image
            className={styles.descriptionBg}
            src="/images/home/header/rectangle-cut.svg"
            alt="background"
            fill
          />
          <div className={styles.titleMain}>
            <div className={styles.subtitle}>
              THE PREMIER SOURCE OF BLOCKCHAIN INTELLIGENCE
            </div>
            <h1 className={styles.title}>
              The Bloomberg Terminal for<span> crypto and blockchain</span>
            </h1>
          </div>

          <p className={styles.textDesc}>
            We are planning to deploy a cryptocurrency version of the Bloomberg
            terminal, engineered in the 1980’s by Michael Bloomberg{' '}
          </p>
        </div>
        {/* Buttons */}
        <div className={styles.buttonsGroup}>
          {/* Button "Join waiting list" list iside component WatingListForm */}
          <WatingListForm />
          <a
            className="primary-btn"
            target="_blank"
            href="/images/home/header/Satoshi-Terminal-Pitchdeck.pdf"
            rel="noopener noreferrer"
          >
            Our Overview
          </a>
        </div>
        {/* Wating list form */}
      </div>
    </header>
  );
}
