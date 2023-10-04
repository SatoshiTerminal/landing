import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={`${styles.footer} home-sect-p`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <Image
              src="/images/logo.svg"
              alt="Satoshi Terminal"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
