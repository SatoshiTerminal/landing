import React from 'react';
import styles from './HeaderHome.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderHome() {
  return (
    <header className={styles.headerHome}>
      <Image
        className={styles.headerBg}
        src="/images/home/header/header__img-bg.jpg"
        alt="background"
        fill={true}
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
            fill={true}
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
            terminal, ingineered in the 1980’s by Michael Bloomberg{' '}
          </p>
        </div>
        {/* Buttons */}
        <div className={styles.buttonsGroup}>
          <button className="primary-btn">Join wating list</button>
          <a
            className="primary-btn"
            target="_blank"
            href="/images/home/header/Satoshi-Terminal-Pitchdeck.pdf"
            rel="noopener noreferrer"
          >
            Our Overview
          </a>
        </div>
      </div>
    </header>
  );
}
