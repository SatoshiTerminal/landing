import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Icons
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillSkype } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className={`${styles.footer} home-sect-p`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <Image
              src="/images/logo-text.svg"
              alt="Satoshi Terminal"
              width={237}
              height={100}
              className={styles.logo}
            />
            <p className={styles.itemDesc}>
              The Bloomberg Terminal for Crypto. Allowing Wall St to research
              crypto the same way they research stocks and bonds.
            </p>

            <div className={styles.socialLinks}>
              {/* Item 1 */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <AiOutlineYoutube />
              </a>
              {/* Item 2 */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <AiOutlineTwitter />
              </a>
              {/* Item 3 */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <BiLogoFacebook />
              </a>
              {/* Item 4 */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <AiFillSkype />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
