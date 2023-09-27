'use client';

import Link from 'next/link';
import styles from './navbarScrollTo.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// Components
import NavbarMobile from './NavbarMobile';

// Data
import { navbarScrollTo } from '@/data/navbarScrollTo';

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const [goingDown, setGoingDown] = useState(false);

  // Show hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      if (scrollPosition < 50 && goingDown) {
        setGoingDown(false);
      }
      if (scrollPosition > 50 && !goingDown) {
        setGoingDown(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingDown, scrollPosition]);

  // Scroll to section on click
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Add class active to Link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          const sectionId = section.getAttribute('id');
          document
            .querySelectorAll(`.${styles.menu} a`)
            .forEach((link) => {
              link.classList.remove(`${styles.active}`);
              if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add(`${styles.active}`);
              }
            });
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <nav
      className={`${styles.navbar} ${goingDown ? `${styles.scrolled}` : ''}`}
    >
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} href="/">
              <Image
                className={styles.logoImg}
                src="/images/logo.svg"
                width={53}
                height={57}
                alt="logo"
              />
            </Link>
            <div className={styles.logoTitle}>
              <span className={styles.firstWord}>Starter</span>
              <span className={styles.secondWord}>Next.js 13</span>
            </div>
          </div>

          <ul className={styles.menu}>
            {/* Menu links start */}
            {navbarScrollTo.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className={styles.link}
                    href={link.scrollTo}
                    onClick={handleScroll}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            {/* Menu links end */}
          </ul>
          <Link className={`primary-btn ${styles.btnNavbar}`} href="/contact">
            Get A Quote
          </Link>
          {/* Navbar mobile */}
          <NavbarMobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
