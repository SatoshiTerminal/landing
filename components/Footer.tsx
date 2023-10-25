import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import WaitingListForm from '@/components/WaitingListForm';

// Icons
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillRedditCircle } from 'react-icons/ai';
import { BiLogoDiscordAlt } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoQuora } from 'react-icons/bi';

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
              {/* Item 1 Twitter */}
              <a
                href="https://twitter.com/SatoshiTerminal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="twitter link"
              >
                <AiOutlineTwitter />
              </a>
              {/* Item 2 Linkedin */}
              <a
                href="https://www.linkedin.com/company/the-satoshi-terminal/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="linkedin link"
              >
                <AiFillLinkedin />
              </a>
              {/* Item 3 Instagram */}
              <a
                href="https://www.instagram.com/satoshiterminal/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="Instagram link"
              >
                <AiFillInstagram />
              </a>
              {/* Item 4 Discord */}
              <a
                href="https://discord.gg/Uhr2hyfn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="Discord link"
              >
                <BiLogoDiscordAlt />
              </a>
              {/* Item 5 Reddit */}
              <a
                href="https://www.reddit.com/r/SatoshiTerminal/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="Discord link"
              >
                <AiFillRedditCircle />
              </a>
              {/* Item 6 Telegram */}
              <a
                href="https://t.me/satoshiterminal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="Telegram link"
              >
                <BiLogoTelegram />
              </a>
              {/* Item 7 Quora */}
              <a
                href="https://www.quora.com/profile/Satoshi-Terminal-1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                aria-label="Quora link"
              >
                <BiLogoQuora />
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
            {/* Button "Join waiting list" list iside component WaitingListForm */}
            <WaitingListForm />
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
