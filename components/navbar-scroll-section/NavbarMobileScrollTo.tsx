'use client';

import { useState, useEffect } from 'react';
import styles from './NavbarMobileScrollTo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Data
import { navbarScrollTo } from '@/data/navbarScrollTo';

// Icons
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const NavbarMobile = () => {
  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  // function close menu on press escape key

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Scroll to section on click
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
    // close menu
    setIsOpen(false);
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
          document.querySelectorAll(`.${styles.menuList} a`).forEach((link) => {
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
    <nav className={styles.navbarMobile}>
      <div className={styles.menu}>
        <button
          aria-label="Navbar mobile toggle button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuBtn}
        >
          {isOpen ? (
            // Icon
            <AiOutlineMenuUnfold className={styles.menuBtn}/>
            // Image if you want castom icon svg
            
            //   src="/images/navbar/menu-mobile__close.svg"
            //   width={40}
            //   height={40}
            //   alt="menu"
            //   className={styles.menuBtn}
            // />
          ) : (
            // Icon
            <AiOutlineMenuFold className={styles.menuBtn}/>
            // Image if you want

            // <Image
            //   src="/images/navbar/menu-mobile.svg"
            //   width={40}
            //   height={40}
            //   alt="menu"
            //   className={styles.menuBtn}
            // />
          )}
        </button>
      </div>

      <div className={`${styles.menuMobile} ${isOpen ? `${styles.open}` : ''}`}>
        <ul className={styles.menuList}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image
                className={styles.logoImg}
                src="/images/logo.svg"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
          {/* Menu links */}
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
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
