import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import WatingListForm from '@/components/WatingListForm';

// Icons
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillSkype } from 'react-icons/ai';

type FooterDataTypes = {
  title: string;
  linkUrl: string;
}[];

const footerDataColumn2: FooterDataTypes = [
  {
    title: 'Home',
    linkUrl: '/',
  },
  {
    title: 'About',
    linkUrl: '/about',
  },
  {
    title: 'Contact',
    linkUrl: '/contact',
  },
  {
    title: 'Explore',
    linkUrl: '/explore',
  },
  {
    title: 'Terms & Services',
    linkUrl: '/terms-services',
  },
];
const footerDataColumn3: FooterDataTypes = [
  {
    title: 'Help Center',
    linkUrl: '/',
  },
  {
    title: 'Partners',
    linkUrl: '/about',
  },
  {
    title: 'Suggestions',
    linkUrl: '/contact',
  },
  {
    title: 'Blog',
    linkUrl: '/blog',
  },
  {
    title: 'Newsletters',
    linkUrl: '/news',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Column 1 start */}
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
                aria-label="youtube link"
              >
                <AiOutlineYoutube />
              </a>
              {/* Item 2 */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="twitter link"
              >
                <AiOutlineTwitter />
              </a>
              {/* Item 3 */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="facebook link"
              >
                <BiLogoFacebook />
              </a>
              {/* Item 4 */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="skype link"
              >
                <AiFillSkype />
              </a>
            </div>
          </div>
          {/* Column 1 end */}
          {/* Column 2 start */}
          <div className={`${styles.contentItem} ${styles.contentItemML}`}>
            <h6 className={styles.contentItemTitle}>USEFUL LINKS</h6>
            <ul className={styles.listLinks}>
              {footerDataColumn2.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <Link className={styles.footerLink} href={item.linkUrl}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 2 end */}
          {/* Column 3 start */}
          <div className={`${styles.contentItem} ${styles.contentItemML}`}>
            <h6 className={styles.contentItemTitle}>COMMUNITY</h6>
            <ul className={styles.listLinks}>
              {footerDataColumn3.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <Link className={styles.footerLink} href={item.linkUrl}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3 end */}
          {/* Column 4 start */}
          <div className={styles.contentItem}>
            <h6 className={styles.contentItemTitle}>Information</h6>
            <p className={styles.itemDesc}>
              Our product is under development but you can join the waiting list
              for this innovative solution that will change the world of
              cryptocurrencies forever.
            </p>
            {/* Button "Join waiting list" list iside component WatingListForm */}
            <WatingListForm />
          </div>
          {/* Column 4 end */}
        </div>
        {/* Content end */}
        <div className={styles.copyright}>
          <p>Copyright © 2023. All Rights Reserved Satoshi Terminal</p>
          <div className={styles.copyrightLinks}>
            <Link  className={styles.footerLink} href="/terms-services">Terms & Services</Link>
            <Link className={styles.footerLink} href="/privacy-policy">Privacy Policy</Link>
            <Link className={styles.footerLink} href="/login">Login / Signup</Link>
          </div>
        </div>
      </div>
      {/* Container end */}
    </footer>
  );
}
