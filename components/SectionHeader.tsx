'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './SectionHeader.module.css';

// Icons
import { IoTriangleSharp } from 'react-icons/io5';

type SectionHeaderProps = {
  cssClassName?: string;
  subtitle: string;
  titleBeforeAccent: string;
  titleAccent: string;
  titleAfterAccent?: string;
  description: string;
};

export default function SectionHeader({
  cssClassName,
  subtitle,
  titleBeforeAccent,
  titleAccent,
  titleAfterAccent,
  description,
}: SectionHeaderProps) {

  // react-intersection-observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div ref={ref} className={`${styles.sectionHeader} ${cssClassName}`}>
      <div
        className={`${styles.sectionSubtitle} ${
          inView ? `animate__animated animate__flash animate__slow` : 'invisible'
        }`}
      >
        <span className={styles.subtitleIcon}>
          <IoTriangleSharp />
        </span>
        {subtitle}
      </div>
      <h2
        className={`${styles.sectionTitle} ${
          inView ? `animate__animated animate__fadeInUp` : 'invisible'
        }`}
      >
        {titleBeforeAccent} <span>{titleAccent}</span> {titleAfterAccent}
      </h2>
      <p
        className={`${styles.sectionDesc} ${
          inView ? `animate__animated animate__fadeIn animate__slower` : 'invisible'
        }`}
      >
        {description}
      </p>
    </div>
  );
}
